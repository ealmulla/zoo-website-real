import json

#get users
def getUsers():
    with open("db/users.json","r+") as file:
        return json.load(file)

#save user
def saveUser(newUser):
    with open("db/users.json","w+") as file:
        return (json.dump(newUser,file,indent=4))