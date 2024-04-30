import json

#get rooms
def getRooms():
    with open("db/rooms.json","r+") as file:
        return json.load(file)
