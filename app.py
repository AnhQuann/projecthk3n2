from flask import *
from datetime import datetime
from flask_login import LoginManager, login_required, login_user, UserMixin, current_user,logout_user
from flask_restful import *
from mlab import mlab_connect
from models.models import User, Dissertation

mlab_connect()
app = Flask(__name__)
api = Api(app)
app.config['SECRET_KEY'] = 'c4e'
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.session_protection = "strong"
#
# class UserProjectINIT:
#     def __init__(self, username, password, name, age, role, disser):
#         self.username = username
#         self.password = password
#         self.name = name
#         self.age = age
#         self.role = role
#         self.disser = disser
#
# class DissertationProjectINIT:
#     def __init__(self, disser_name, post_day):
#         self.disser_name = disser_name
#         self.post_day = post_day

#LOGIN______________________________
#GETUSER
class UserMixin:
    def __init__(self,id_user, username, password, role, name, age, disser):
        self.id_user = id_user
        self.username = username
        self.password = password
        self.role = role
        self.name = name
        self.age = age
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
            return UserMixin(user.id,user.username,user.password,user.role,user.name,user.age,user.disser)
    return None

#UNAUTHORIZED
@login_manager.unauthorized_handler
def unauthorized():
    return redirect(url_for('login'))

#ROUTE_______________________________
@app.route('/', methods = ['GET', 'POST'])
@login_required
def index():
    return render_template('./homepage/index.html')

#LOGIN
@app.route('/login', methods=["GET","POST"])
def login():
    if request.method == "GET":
        return render_template('./login/login.html')
    elif request.method == "POST":
        form = request.form
        username = form["username"]
        password = form["password"]
        print("Chạy qua Login")
        user = get_user(username)
        if user is None:
            return # 401 = Unauthorized
        elif user.password != password:
            return # 401 = Unauthorized
        else:
            login_user(user)
            return redirect(url_for('index'))
#LOGOUT
@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for('login'))

#API________________________________
class UserProject(Resource):
    def get(self):
        raw_user_data = User.objects()
        api_user_data = []
        for data in raw_user_data:
            data_push_to_list = {
                "username": data.username,
                "password": data.password,
                "name": data.name,
                "age": data.age,
                "role": data.role,
                "disser": data.disser,
            }
            api_user_data.append(data_push_to_list)
        return api_user_data
        # raw_user_data = User.objects.with_id(current_user.id_user)
        # print(raw_user_data)
        # api_user_data = []
        # data_push_to_list = {
        #     "username": raw_user_data.username,
        #     "password": raw_user_data.password,
        #     "name": raw_user_data.name,
        #     "age": raw_user_data.age,
        #     "role": raw_user_data.role,
        #     "disser": raw_user_data.disser,
        # }
        # api_user_data.append(data_push_to_list)
        # return api_user_data

    def post(self):
        user_post = request.get_json()
        user = UserProjectINIT(user_post["username"], user_post["password"], user_post["name"], user_post["age"], user_post["role"], user_post["disser"])
        new_user = User(username = user.username, password = user.password, name = user.name, age = user.age, role = user.role, disser = user.disser)
        new_user.save()

class Dissertation(Resource):
    def get(self):
        raw_disser_data = Dissertation.objects()
        api_disser_data = []

        for data in raw_disser_data:
            data_push_to_list = {
                "disser_name": data.disser_name,
                "post_day": data.post_day
            }
            api_disser_data.append(data_push_to_list)
        return api_disser_data

    def post(self):
        disser_post = request.get_json()
        disser = DissertationProjectINIT(disser_post["disser_name"], disser_post["post_day"])

        new_disser = Dissertation(disser_name = disser.disser_name, post_day = disser.post_day)
        new_disser.save()
        User.objects(username = current_user.username).update(push__disser = new_disser)

api.add_resource(UserProject, '/api/login')
api.add_resource(Dissertation, '/api/getdata')
# API________________________________
if __name__ == '__main__':
  app.run(debug=True)
