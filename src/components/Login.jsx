import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "../Styles/Login.css";

const Login = () => {
  const [user_email, setUserEmail] = useState("");
  const [user_password, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  const onSubmitLoginForm = async (event) => {
    event.preventDefault();

    const payload = {
      user_email,
      user_password,
    };

    const apiUrl = "https://syoft.dev/Api/userlogin/api/userlogin";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data);

    if (data.status === true) {
      const username = JSON.stringify(data.user_data[0]);
      localStorage.setItem("user", username);
      setRedirectToDashboard(true);
    } else {
      alert("Login Failed");
    }
  };

  const onChangeEmail = (event) => {
    setUserEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setUserPassword(event.target.value);
  };

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (redirectToDashboard) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="login-page-container">
      <div className="login-page-content">
        <h1 className="login-page-heading">Login</h1>
        <form className="login-form-container" onSubmit={onSubmitLoginForm}>
          <div className="login-label-input-container">
            <label htmlFor="userEmail" className="login-label-element">
              User Email
            </label>
            <input
              type="email"
              id="userEmail"
              value={user_email}
              onChange={onChangeEmail}
              className="login-input-element"
              required
            />
          </div>
          <div className="label-input-container">
            <label htmlFor="UserPassword" className="login-label-element">
              User Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="UserPassword"
              value={user_password}
              onChange={onChangePassword}
              className="login-input-element"
              required
            />
            <div
              className="checkbox-label-container"
              onClick={onClickShowPassword}
            >
              <input type="checkbox" id="checkboxInput" />
              <label htmlFor="checkboxInput" className="label-checkbox">
                Show Password
              </label>
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
