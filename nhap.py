tlu_list = {
    "Toan Tin": {
        "TI":"Computer Science",
        "TE":"Information System",
        "TC":"Computer Network"
        },
    "Ngoai Ngu": {
        "NE":"English",
        "NF":"French",
        "NJ":"Japanese"
    }
}
iD = "TC29A1"
for key, value in tlu_list.items():
    if iD[0] + iD[1] in value:
        course = key
        class_name = value[iD[0] + iD[1]]
        break
print(course, class_name)
