import "./AuthForm.css";
import { useState } from "react";

const AuthForm = ({ onSubmit, formLabel }) => {
  // const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="formContainer">
      <h1>Please {formLabel} here:</h1>
      <form
        className="auth-form"
        onSubmit={(e) => onSubmit(e, email, password)}
      >
        <div className="forminput">
          <label htmlFor="email-address">Email:</label>
          {/*where the user enters email*/}
          <input
            id="email-address"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="formInputField"
            required
          />
          <label htmlFor="password">Password:</label>
          {/*where the user enters password*/}
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="formInputField"
            required
          />
        </div>
        {/*where the user accepts terms and conditions*/}
        <button required></button>
        <p>accept terms and conditions</p>
        {/*where the submits*/}
        <button className="ConfirmButton" type="submit">
          {formLabel}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
