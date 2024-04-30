import "./Home.css";
import NavButton from "../../Components/NavButton/navButton";
import Zebra from "../../Assets/zibras.jpg"
const Home = () => {
  return (
    <div className="Home">
      <img src={Zebra} className="zebra"/>
    </div>
  );
};
export default Home;
