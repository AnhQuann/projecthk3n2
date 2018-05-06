import mongoengine

# mongodb://<dbuser>:<dbpassword>@ds111410.mlab.com:11410/projecthk3n2
# mongodb://localhost/hoidedb
# host = "ds111410.mlab.com"
# port = 11410
# db_name = "projecthk3n2"
# user_name = "admin"
# password = "admin"

host = "localhost"
port = 27017
db_name = "projecthk3n2"
user_name = "admin"
password = "admin"

def mlab_connect():
    mongoengine.connect(db_name, host=host, port=port, username=user_name, password=password)

def list2json(l):
    import json
    return [json.loads(item.to_json()) for item in l]


def item2json(item):
    import json
    return json.loads(item.to_json())
