import "./LeafyButton.css";
import NavButton from "../../Components/NavButton/navButton";
import leafyButton from "../../Assets/LeafyButton.png";
import Logo from "../../Assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LeafyButton = () => {
  const { username, logout } = useAuth();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="leafyButton">
      <div className="NavButtonContainer">
        <img src={Logo} className="Logo" />
        <NavButton path={"/"} label="" id="5" className="headerNavButton" />
      </div>
      <div className="NavButtonContainer">
        <img
          src={leafyButton}
          alt="leafyButton"
          id="leafyImg"
          className="leafyButtonPic"
        />
        <NavButton
          path={"/Registration"}
          label="Registration page"
          id="5"
          className="headerNavButton"
        />
      </div>
      <div className="NavButtonContainer">
        <img
          src={leafyButton}
          alt="leafyButton"
          id="leafyImg"
          className="leafyButtonPic"
        />
        <NavButton
          path={"/"}
          label="Home page"
          id="5"
          className="headerNavButton"
        />
      </div>
      <div className="NavButtonContainer">
        <img
          src={leafyButton}
          alt="leafyButton"
          id="leafyImg"
          className="leafyButtonPic"
        />
        <NavButton
          path={"/Login"}
          label="Login page"
          id="5"
          className="headerNavButton"
        />
      </div>
      <div className="NavButtonContainer">
        <img
          src={leafyButton}
          alt="leafyButton"
          id="leafyImg"
          className="leafyButtonPic"
        />
        <NavButton
          path="/Rooms"
          label={"Rooms"}
          id="5"
          className="headerNavButton"
        />
      </div>
      <div className="NavButtonContainer">
        <img
          src={leafyButton}
          alt="leafyButton"
          id="leafyImg"
          className="leafyButtonPic"
        />
        <NavButton
          path="/EducationalVisits"
          label={"Educational visits"}
          id="5"
          className="headerNavButton"
        />
      </div>
      <div className="NavButtonContainer">
        <img
          src={leafyButton}
          alt="leafyButton"
          id="leafyImg"
          className="leafyButtonPic"
        />
        <>
      <button  onClick={handleShow} className="headerNavButton">
      Accessibility
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="accessBtn">
          <Modal.Title>Accessibility </Modal.Title>
        </Modal.Header>
        <Modal.Body className="accessBtn">
          <Button >accessibility feature 1</Button>
          <Button>accessibility feature 2</Button>
          <Button>accessibility feature 3</Button>
          <Button>accessibility feature 4</Button>
        </Modal.Body>
        <Modal.Footer className="accessBtn">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      </div>
    </div>
  );
};

export default LeafyButton;
