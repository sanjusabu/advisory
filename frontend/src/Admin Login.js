import useInput from "../src/hooks/useInput";
// import { useRequest } from "../../hooks/request-hook";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRequest } from "../src/hooks/request-hook";
import header from "./components/common/header";
import { AuthContext } from "./context/auth-context";
import React from "react";
import "./Admin.css";
const isEmail = (value) => value.includes("@");
const isPassword = (value) => value.trim().length >= 5;
const isNotEmpty = (value) => value.trim() !== "";
let formValid = false;

const AdminLogin = () => {
  // <NavBar />
  const { isError, sendRequest } = useRequest();
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  // const { isError, clearError, sendRequest } = useRequest();

  const {
    value: nameValue,
    isValid: nameisValid,
    hasError: nameError,
    valueChangeHandler: nameChangeHandler,
    BlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: passwordValue,
    isValid: passwordisValid,
    hasError: passwordError,
    valueChangeHandler: passwordChangeHandler,
    BlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isPassword);

  if (nameisValid && passwordisValid) {
    formValid = true;
  }
  if (!nameisValid || !passwordisValid) {
    formValid = false;
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!formValid) {
      console.log("errorrrr");
      return;
    }
    const response = await sendRequest(
      "https://advisorywebsite.onrender.com/users/adminlogin",
      "POST",
      JSON.stringify({
        email: nameValue,
        password: passwordValue,
      }),
      { "Content-Type": "application/json" }
    );
    resetName();
    resetPassword();
    auth.login("denbfem");
    navigate("/admin");
  };
  return (
    <div className="backgroundimg">
      <header />
      {/* {isError && <ErrorModal error={isError} showmodal={true} />} */}
      <div className="formcontainer">
        <form onSubmit={submitHandler}>
          <div className="form">
            <div className="title">Admin Login</div>

            <div className="input-container ic1">
              <input
                id="email"
                className="input"
                type="text"
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                value={nameValue}
                placeholder="Username"
              />

              {nameError && (
                <p className="error-text">Please Enter a valid Email!</p>
              )}
            </div>
            <div className="input-container ic2">
              <input
                id="lastname"
                className="input"
                type="password"
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                value={passwordValue}
                placeholder="Password"
              />
              {passwordError && (
                <p className="error-text">
                  Password should be atleast 5 characters long!
                </p>
              )}

              {/* {<p style={{ color: "red" }}>{isError}</p>} */}
            </div>
            <br />
            <br />

            <button type="submit" disabled={!formValid} className="submit">
              Submit
            </button>
            {isError && <p style={{ color: "red" }}>Wrong Credentials</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
