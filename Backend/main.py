from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api import users
from api import rooms

app = FastAPI()

app.include_router(users.router, prefix="/users",tags=["users"])
app.include_router(rooms.router, prefix="/rooms",tags=["rooms"])

origins = [
    "http://localhost",
    "https://localhost",
    "http://localhost:3000",
    "https://localhost:3000",
    "http://10.50.40.245:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=[*],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def main():
    return {"message": "Hello World"}


