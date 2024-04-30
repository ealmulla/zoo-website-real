import "./RoomsDisplay.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const RoomDisplay = ({ room }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="row bs">
      <div className="col-md-4 col">
        <img src={room.imgUrl[0]} className="smallImg" />
      </div>
      <div className="col-md-7 col ">
        <h1>{room.roomName}</h1>
        <p>Room number: {room.roomNumber}</p>
        <p>Max people: {room.maxPeople}</p>
        <p>Cost per night: £{room.costPerDay}</p>
        <p>Room type: {room.roomType}</p>
        <p>{room.description}</p>
        <div style={{ float: "right" }} className="bookDetailBtn">
          <Link to={`/Booking/${room.id}`}>
            <button className="btn btn-primary ">Book Now</button>
          </Link>
          <button className="btn btn-primary ml-2" onClick={handleShow}>
            View details
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton id="col">
          <Modal.Title>{room.roomName}</Modal.Title>
        </Modal.Header>
        <Modal.Body id="col">
          <Carousel>
            {room.imgUrl.map((url, index) => (
              <Carousel.Item key={index}>
                <img src={url} className="d-block w-100 bigImg" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
        <Modal.Footer id="col">
          <p>Room number: {room.roomNumber}</p>
          <p>Max people :{room.maxPeople}</p>
          <p>Cost per night :{room.castPerDay}</p>
          <p>Room type :{room.roomType}</p>
          <p>{room.description}</p>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RoomDisplay;
