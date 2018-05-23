from flask import *
from datetime import datetime
from flask_login import LoginManager, login_required, login_user, UserMixin, current_user,logout_user

# FLASK RESTFUL API
from flask_restful import *

from flask_mongoengine import MongoEngine

# MODEL
from mlab import mlab_connect
from models.models import *

mlab_connect()
app = Flask(__name__)
api = Api(app)

db = MongoEngine()
db.init_app(app)

class Dissertation(db.Document):
    disser_name = db.StringField()
    post_day = db.DateTimeField()
    status = db.BooleanField()

class User(db.Document):
    username = db.StringField()
    password = db.StringField()
    name = db.StringField()
    yob = db.IntField()
    role = db.IntField()
    email = db.EmailField()
    disser = db.ListField(db.ReferenceField(Dissertation))

class Course(db.Document):
    course_name = db.StringField()
    students = db.ListField(db.ReferenceField(User))
    teachers = db.ListField(db.ReferenceField(User))

class Exarminer(db.Document):
    name = db.StringField()
    yob = db.IntField()
    role = db.IntField()
    point = db.IntField()

class Examine(db.Document):
    ID = db.StringField()
    members = db.ListField(db.ReferenceField(Exarminer))

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.session_protection = "strong"
#

class DissertationINIT:
    def __init__(self, disser_name, post_day, status):
        self.disser_name = disser_name
        self.post_day = post_day
        self.status = status

class UserINIT:
    def __init__(self, username, password, name, yob, role, email, disser):
        self.username = username
        self.password = password
        self.name = name
        self.yob = yob
        self.role = role
        self.email = email
        self.disser = disser
#

class CourseINIT(db.Document):
    def __init__(self, course_name, students, teachers):
        self.course_name = course_name
        self.students = students
        self.teachers = teachers

class ExarminerINIT:
    def __init__(self, name, yob, role, point):
        self.name = name
        self.yob = yob
        self.role = role
        self.point = point

class ExamineINIT(db.Document):
    def __init__(self, ID, members):
        self.ID = ID
        self.members = members

#LOGIN______________________________
#GETUSER
class UserMixin:
    def __init__(self, id_user, username, password, role, name, yob, email, disser):
        self.id_user = id_user
        self.username = username
        self.password = password
        self.role = role
        self.name = name
        self.yob = yob
        self.email = email
        self.disser = disser
        #______________________
        self.is_active = True
        self.is_authenticated = True
        self.is_anonymous = False
        self.id = username

    def get_id(self):
        return self.id

#LOADUSER
@login_manager.user_loader
def get_user(username):
    all_user = User.objects()
    print('Chạy qua loader')
    for user in all_user:
        if user.username == username:
            return UserMixin(user.id,user.username,user.password,user.role,user.name,user.yob,user.email,user.disser)
    return None

#UNAUTHORIZED
@login_manager.unauthorized_handler
def unauthorized():
    return redirect(url_for('login'))

#ROUTE_______________________________
@app.route('/', methods = ['GET', 'POST'])
@login_required
def index():
    cur_id = current_user.id_user
    cur_username = current_user.username
    cur_name = current_user.name
    cur_yob = current_user.yob
    cur_email = current_user.email
    cur_disser = current_user.disser
    if current_user.role == 0:
        cur_role = "Thư ký"
        return render_template('./homepage/role0.html', cur_id = cur_id,
                                                    cur_username = cur_username,
                                                    cur_name = cur_name,
                                                    cur_yob = cur_yob,
                                                    cur_role = cur_role,
                                                    cur_email = cur_email,
                                                    cur_disser = cur_disser)
    elif current_user.role == 1:
        cur_role = "Hội đồng chấm thi"
        return render_template('./homepage/role1.html', cur_id = cur_id,
                                                    cur_username = cur_username,
                                                    cur_name = cur_name,
                                                    cur_yob = cur_yob,
                                                    cur_role = cur_role,
                                                    cur_email = cur_email,
                                                    cur_disser = cur_disser)
    elif current_user.role == 2:
        cur_role = "Giáo viên"
        return render_template('./homepage/role2.html', cur_id = cur_id,
                                                    cur_username = cur_username,
                                                    cur_name = cur_name,
                                                    cur_yob = cur_yob,
                                                    cur_role = cur_role,
                                                    cur_email = cur_email,
                                                    cur_disser = cur_disser)
    elif current_user.role == 3:
        cur_role = "Sinh viên"
        return render_template('./homepage/role3.html', cur_id = cur_id,
                                                    cur_username = cur_username,
                                                    cur_name = cur_name,
                                                    cur_yob = cur_yob,
                                                    cur_role = cur_role,
                                                    cur_email = cur_email,
                                                    cur_disser = cur_disser)


#LOGIN
@app.route('/login', methods=["GET","POST"])
def login():
    if request.method == "GET":
        return render_template('./login/login.html')
    # elif request.method == "POST":
    #     form = request.form
    #     username = form["username"]
    #     password = form["password"]
    #     print("Chạy qua Login")
    #     user = get_user(username)
    #     if user is None:
    #         return # 401 = Unauthorized
    #     elif user.password != password:
    #         return # 401 = Unauthorized
    #     else:
    #         login_user(user)
    #         return redirect(url_for('index'))
#LOGOUT
@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for('login'))

#API________________________________
class GetCurrentID(Resource):
    def get(self):
        cur_id = str(current_user.id_user)
        data = {"cur_id" : cur_id}
        return data

class UserAPI(Resource):
    def get(self):
        raw_user_data = User.objects()
        api_user_data = []
        for data in raw_user_data:
            data_id = []
            for dataid in data.disser:
                data_id.append(str(dataid.id))
            data_push_to_list = {
                "id": str(data.id),
                "username": data.username,
                "password": data.password,
                "name": data.name,
                "yob": data.yob,
                "role": data.role,
                "email":data.email,
                "disser": data_id
            }
            api_user_data.append(data_push_to_list)
        return api_user_data

    def post(self):
        user_post = request.get_json()
        username = user_post['username']
        userpass = user_post['password']
        user = get_user(username)
        login_user(user)

class UserDelete(Resource):
    def post(self):
        user = request.get_json()
        User.objects().with_id(user["id"]).delete()

class UserEdit(Resource):
    def post(self):
        user = request.get_json()
        userEdit = User.objects().with_id(user["id"])
        userEdit.update(set__name = user["name"],
                        set__yob = user["yob"],
                        set__role = int(user["role"]),
                        set__email = user["email"])

class RegisterUser(Resource):
    def post(self):
        user_post = request.get_json()
        ID = user_post["id_course"]
        user = UserINIT(user_post["username"],
                        user_post["password"],
                        user_post["name"],
                        int(user_post["yob"]),
                        int(user_post["role"]),
                        user_post["email"],
                        user_post["disser"])

        new_user = User(username = user.username,
                        password = user.password,
                        name = user.name,
                        yob = user.yob,
                        role = user.role,
                        email = user.email,
                        disser = [])
        new_user.save()
        # print(user.role)
        if user.role == 3:
            Course.objects.with_id(ID).update(push__students = new_user)
        elif user.role == 2:
            Course.objects.with_id(ID).update(push__teachers = new_user)

        return {
            "Success": "True"
        }

class RegisterExarminer(Resource):
    def post(self):
        exarminer_post = request.get_json()
        ID = exarminer_post["ID"]
        exarminer = ExarminerINIT(exarminer_post["name"],
                                int(exarminer_post["yob"]),
                                int(exarminer_post["role"]),
                                int(exarminer_post["point"]))
        #
        new_exarminer = Exarminer(name = exarminer.name,
                                yob = exarminer.yob,
                                role = exarminer.role,
                                point = exarminer.point)
        new_exarminer.save()
        Examine.objects.with_id(ID).update(push__members = new_exarminer)
        return {
            "Success": "True"
        }

class RegisterExarmine(Resource):
    def post(self):
        examine_post = request.get_json()
        examine = ExamineINIT(examine_post["ID"], examine_post["members"])
        new_examine = Examine(ID = examine.ID, members = [])
        new_examine.save()

class DissertationAPI(Resource):
    def get(self):
        raw_disser_data = Dissertation.objects()
        api_disser_data = []
        for data in raw_disser_data:
            data_push_to_list = {
                "id_disser" : str(data.id),
                "disser_name": data.disser_name,
                "post_day": str(data.post_day),
                "status": data.status
            }
            api_disser_data.append(data_push_to_list)
        return api_disser_data

    def post(self):
        disser_post = request.get_json()
        ID = disser_post['id_post']
        post_day = datetime.now()
        disser = DissertationINIT(disser_post["disser_name"],
                                post_day,
                                disser_post["status"])

        new_disser = Dissertation(disser_name = disser.disser_name,
                                post_day = disser.post_day,
                                status = disser.status)
        new_disser.save()
        User.objects.with_id(ID).update(push__disser = new_disser)

class DissertationDelete(Resource):
    def post(self):
        disser_get = request.get_json()
        user = User.objects.filter(disser__contains = disser_get['id'])
        print(user)
        if user == []:
            _disser = Dissertation.objects().with_id(disser_get['id'])
            _disser.delete()
        else:
            for data in user:
                id_user = data.id
            disser = Dissertation.objects().with_id(disser_get['id'])
            User.objects.with_id(id_user).update(pull__disser = disser)
            disser.delete()

class DissertationEdit(Resource):
    def post(self):
        disser = request.get_json()
        disserEdit = Dissertation.objects().with_id(disser['id'])
        disserEdit.update(set__disser_name = disser['disser_name'],
                        set__status = disser['status'])

class ExarminerAPI(Resource):
    def get(self):
        raw_examine_data = Exarminer.objects()
        api_examine_data = []
        for data in raw_examine_data:
            data_push_to_list = {
                "id": str(data.id),
                "name": data.name,
                "yob": data.yob,
                "role": data.role,
                "point": data.point
            }
            api_examine_data.append(data_push_to_list)
        return api_examine_data

class ExarmineAPI(Resource):
    def get(self):
        raw_examine_data = Examine.objects()
        api_examine_data = []
        for data in raw_examine_data:
            data_id = []
            for dataid in data.members:
                data_id.append(str(dataid.id))
            data_push_to_list = {
                "id": str(data.id),
                "ID": data.ID,
                "members": data_id
            }
            api_examine_data.append(data_push_to_list)
        return api_examine_data

class CourseAPI(Resource):
    def get(self):
        raw_course_data = Course.objects()
        api_course_data = []
        for data in raw_course_data:
            data_students = []
            data_teachers = []
            for dataid in data.students:
                data_students.append(str(dataid.id))
            for dataid in data.teachers:
                data_teachers.append(str(dataid.id))
            data_push_to_list = {
                "id":str(data.id),
                "course_name": data.course_name,
                "students":data_students,
                "teachers":data_teachers
            }
            api_course_data.append(data_push_to_list)
        return api_course_data

    def post(self):
        course_post = request.get_json()
        course = CourseINIT(course_post["course_name"],
                            course_post["students"],
                            course_post["teachers"])

        new_course = Course(course_name = course.course_name,
                            students = [],
                            teachers = [])
        new_course.save()

api.add_resource(UserAPI, '/api/user/') # post
api.add_resource(UserDelete, '/api/user/delete/') #post
api.add_resource(UserEdit, '/api/user/edit/') #post

api.add_resource(DissertationAPI, '/api/dissertation/')
api.add_resource(DissertationDelete, '/api/dissertation/delete/')
api.add_resource(DissertationEdit, '/api/dissertation/edit/')

api.add_resource(RegisterUser, '/api/registeruser')
api.add_resource(RegisterExarminer, '/api/registerexaminer')
api.add_resource(RegisterExarmine, '/api/registerexamine')
api.add_resource(GetCurrentID,'/api/getcurid/')

api.add_resource(ExarminerAPI, '/api/exarminer')
api.add_resource(ExarmineAPI, '/api/exarmine')

api.add_resource(CourseAPI, '/api/course')
# API________________________________

if __name__ == '__main__':
    app.run(debug=True)
# Ver2
