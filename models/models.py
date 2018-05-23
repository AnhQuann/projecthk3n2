from mongoengine import *
from datetime import datetime

class Dissertation(Document):
    disser_name = StringField()
    post_day = DateTimeField()
    status = BooleanField()

class User(Document):
    username = StringField()
    password = StringField()
    name = StringField()
    yob = IntField()
    role = IntField()
    email = EmailField()
    disser = ListField(ReferenceField(Dissertation))

class Course(Document):
    course_name = StringField()
    students = ListField(ReferenceField(User))
    teachers = ListField(ReferenceField(User))

class Exarminer(Document):
    name = StringField()
    yob = IntField()
    role = IntField()
    point = IntField()

class Examine(Document):
    ID = StringField()
    members = ListField(ReferenceField(Exarminer))
