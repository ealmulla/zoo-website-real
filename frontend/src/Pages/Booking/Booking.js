import "./Booking.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import axios from "axios";


const Booking = () => {
  const [roomid, setRoomId] = useState(uuidv4());

  

  return (
    <div>
      <h1>Booking</h1>
      <h1>Room id = {roomid}</h1>
    </div>
  );
};

export default Booking;
