import "./Login.css";
import AuthForm from "../../Form/AuthForm";
import { useAuth } from "../../Context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackgroundBar from "../../Assets/backgroundBar.png";

const Login = () => {
  const { setUsername, setUserId } = useAuth();

  const navigate = useNavigate();
  const [error, setError] = useState();

  const onSubmit = async (e, email, password) => {
    e.preventDefault();

    const dataToSend = {
      email: email,
      password: password,
    };
    console.log(dataToSend);

    axios
      .post("http://localhost:8000/users/login", dataToSend)
      .then((res) => {
        setUsername(res.data.username);
        setUserId(res.data.id);
        localStorage.setItem("userId", res.data.id);
        localStorage.setItem("username", res.data.username);
        console.log("its trying");
        navigate("/");
      })
      .catch((err) => {
        //if there was an error
        //if we got an response, display that, otherwise display the axios err message, if even that is missing, default to unknown error text
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
        {error && <div className="login-error text-label">{error}</div>}
        <AuthForm onSubmit={onSubmit} formLabel="Sign in" />
      </div>
      <img src={BackgroundBar} className="BackgroundBar" id="BackgroundBar" />
    </div>
  );
};
export default Login;
