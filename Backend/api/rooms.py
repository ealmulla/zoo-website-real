from fastapi import APIRouter
from pydantic import BaseModel

from db.roomUtils import getRooms
from db.dbUtils import getData

router = APIRouter()

class RoomSchema(BaseModel):
    roomName:str
    roomNumber:int
    maxPeople:str
    costPerDay:str
    imgUrl:list[str]
    roomType:str
    description:str


@router.get("/rooms")
async def GetRoomsAvailable():
    rooms= getData("db/rooms.json")

    return{"rooms":rooms}

@router.post("/getRoomsId")
async def GetRoomsAvailable():
    rooms= getData("db/rooms.json")

    return{"rooms":rooms}



