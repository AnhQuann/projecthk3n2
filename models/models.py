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
    point = IntField()

class Course(Document):
    course_name = StringField()
    students = ListField(ReferenceField(User,reverse_delete_rule=CASCADE))
    teachers = ListField(ReferenceField(User,reverse_delete_rule=CASCADE))

class Exarminer(Document):
    name = StringField()
    yob = IntField()
    role = IntField()
    point = IntField()

class Examine(Document):
    ID = StringField()
    members = ListField(ReferenceField(User,reverse_delete_rule=CASCADE))

class CourseWave(Document):
    wave_name = StringField()
    title = StringField()
    students = ListField(ReferenceField(User,reverse_delete_rule=CASCADE))
    status = BooleanField()
