from flask import *
from datetime import datetime

from flask_restful import *

from mlab import mlab_connect
from models.models import User, Dissertation
mlab_connect()

app = Flask(__name__)

api = Api(app)

@app.route('/')
def index():
    return render_template('index.html')

class UserProjectINIT:
    def __init__(self, username, password, name, age, role, disser):
        self.username = username
        self.password = password
        self.name = name
        self.age = age
        self.role = role
        self.disser = disser

class DissertationProjectINIT:
    def __init__(self, disser_name, post_day):
        self.disser_name = disser_name
        self.post_day = post_day

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

if __name__ == '__main__':
  app.run(port=3232, debug=True)
