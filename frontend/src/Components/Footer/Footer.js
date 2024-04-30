import "./Footer.css";
import FooterBackground from "../../Assets/FooterBackground.png";
import NavButton from "../NavButton/navButton";

const Footer = () => {
  return (
    <div>
      <img src={FooterBackground} className="footer" />
      <div className="footerButtons">
        <NavButton path={"/"} label="" id="5" className="headerNavButton" />

        <NavButton
          path={"/Registration"}
          label="Registration page"
          id="5"
          className="headerNavButton"
        />

        <NavButton
          path={"/"}
          label="Home page"
          id="5"
          className="headerNavButton"
        />

        <NavButton
          path={"/Login"}
          label="Login page"
          id="5"
          className="headerNavButton"
        />

        <NavButton
          path="/Rooms"
          label={"Rooms"}
          id="5"
          className="headerNavButton"
        />

        <NavButton
          path="/EducationalVisits"
          label={"Educational visits"}
          id="5"
          className="headerNavButton"
        />
      </div>
    </div>
  );
};

export default Footer;
