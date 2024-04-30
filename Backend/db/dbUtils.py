import uuid
import json

def generateId():
     return uuid.uuid4().hex

#get data
def getData(filePath):
    with open(filePath,"r+") as file:
        return json.load(file)
