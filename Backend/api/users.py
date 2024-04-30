from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from db.userUtils import getUsers
from db.userUtils import saveUser
from db.dbUtils import generateId

router = APIRouter()

class Authcredentails(BaseModel):
    email:str
    password:str

class LoginResponse(BaseModel):
    id: str
    username:str



@router.post("/login",response_model=LoginResponse)
async def Login(credentials: Authcredentails):
    userJSON = getUsers()
    
    #checing if the user exists
    for user in userJSON["users"]:
        if (credentials.email == user["email"]):
            #check if password is correct
            if credentials.password == user["password"]:
                return {"id":user["id"],"username":user["username"]}
            else:
                raise HTTPException(400,detail="password is incorrect")
        
    raise HTTPException(400,detail=("user not found "))
        
    
@router.post("/registration",response_model=LoginResponse)
async def Registration(credentials:Authcredentails):
    userJSON = getUsers()
    #checing if the user exists
    for user in userJSON["users"]:
        if credentials.email == user["email"]:
            raise HTTPException(400,detail="user already exists ")
    
    newUser = {
        "email": credentials.email,
        "password": credentials.password,
        "id": generateId(),
        "username":credentials.email.split("@")[0]
    }
    
    userJSON["users"].append(newUser)
    
    saveUser(userJSON)
    
    return {"id":newUser["id"],"username":newUser["username"]}
        