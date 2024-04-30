import "./Header.css";
import HeaderBar from "../../Assets/headerBar.png";
import LeafyButton from "../LeafyButton/LeafyButton";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import NavButton from "../../Components/NavButton/navButton";

const Header = () => {
  const { username, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <img src={HeaderBar} className="HaderBarBackground" id="Header" />
      <div className="header">
        <LeafyButton
          className="LeafyButtonOnHeader"
          id="LeafyButton"
        ></LeafyButton>
        <div className="authButtons">
          {!username && (
            <NavButton
              path="/Login"
              label="Login"
              className="btn "
              id="authButtons"
            />
          )}
          {!username && (
            <NavButton
              path="/Registration"
              label="Register"
              className="btn "
              id="authButtons"
            />
          )}
          {username && (
            <button
              text="Sign Out"
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="btn "
              id="authButtons"

            >sign out</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
