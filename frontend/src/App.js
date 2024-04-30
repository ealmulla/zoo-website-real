import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Login/Login";
import Rooms from "./Pages/Rooms/Rooms";
import Booking from "./Pages/Booking/Booking";
import Header from "./Components/Header/Header"
import EducationalVisits from "./Pages/EducationalVisits/EducationalVisits";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <body className="body">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Registration" element={<Registration/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Rooms" element={<Rooms/>} />
          <Route path="/Booking/:roomid" element={<Booking/>} />
          <Route path="/EducationalVisits" element={<EducationalVisits/>} />
        </Routes>
        </body>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
export default App;
