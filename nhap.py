from mongoengine import *
from datetime import datetime
import mlab

mlab.mlab_connect()

class Dissertation(Document):
    disser_name = StringField()
    post_day = DateTimeField()

class User(Document):
    username = StringField()
    password = StringField()
    name = StringField()
    age = IntField()
    role = IntField()
    disser = ListField(ReferenceField(Dissertation))

class Exarminer(Document):
    username = StringField()
    password = StringField()
    name = StringField()
    age = IntField()
    role = IntField()
    last_point_sys = FloatField()
    cur_point_sys = FloatField()
    point = IntField()

print(Exarminer.objects())
# new_examine.save()
