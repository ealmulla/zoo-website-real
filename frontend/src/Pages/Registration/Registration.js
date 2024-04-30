import "./Registration.css";
import AuthForm from "../../Form/AuthForm";
import { useAuth } from "../../Context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackgroundBar from "../../Assets/backgroundBar.png";

const Registration = () => {
  //the varaibles that are taken from authContext
  const { setUsername, setUserId } = useAuth();

  const navigate = useNavigate();
  const [error, setError] = useState();

  //when the user submits their form
  const onSubmit = async (e, email, password) => {
    e.preventDefault();
    //th data that wll be sent to the backend
    const dataToSend = {
      email: email,
      password: password,
    };
    //here the registration function form the backend is being used
    axios
      .post("http://localhost:8000/users/registration", dataToSend)
      .then((res) => {
        //if its successful
        setUsername(res.data.username);
        setUserId(res.data.id);
        localStorage.setItem("userId", res.data.id);
        localStorage.setItem("username", res.data.username);
        console.log("its trying");
        //navigate to home screen
        navigate("/");
      })
      .catch((err) => {
        //if there was an error
        setError(
          err.response?.data?.detail ||
            err.message ||
            "An Unknown error occured"
        );
      });
  };

  return (
    <div className="auth-page-container">

      <div id="authForm">
        {/*displayes the error that gets given */}
        {error && <div className="login-error text-label">{error}</div>}
        <AuthForm onSubmit={onSubmit} formLabel="Sign Up" />
      </div>
      <img src={BackgroundBar} className="BackgroundBar" id="BackgroundBar" />
    </div>
  );
};
export default Registration;
