import "./Rooms.css";
import { useState, useEffect } from "react";
import axios from "axios";
import RoomDisplay from "../../Components/RoomsDisplay/RoomsDisplay";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      //if it works
      try {
        //so it can display loading message
        setLoading(true);
        const data = (await axios.get("http://127.0.0.1:8000/rooms/rooms"))
          .data;
        const roomsData = data.rooms;
        console.log(roomsData);
        setRooms(roomsData);
        //stops loading when done
        setLoading(false);
      } catch (error) {
        //if there is and error
        //so it can display error message
        setError(true);
        console.log(error);
        //stops loading when done
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  return (
    <div>
      <div className="row jsutify-content-center mt-5">
        {/*if loading is true then display the message,
        else if error is true then display message, otherwise display each room number */}
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error has occurd.</h1>
        ) : (
          rooms.map((room) => {
            return (
              <div className="col-md-9 mt-3">
                <RoomDisplay room={room} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Rooms;
