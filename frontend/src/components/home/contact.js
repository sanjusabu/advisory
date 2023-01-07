import React from "react";
import useInput from "../../hooks/useInput";
import { Form, Input, Button, Checkbox } from "antd";
import { useRequest } from "../../hooks/request-hook";
const { TextArea } = Input;

const isEmail = (value) => value.includes("@");
const isNotEmpty = (value) => value.trim() !== "";
let formValid = false;
const number = (value) => value.trim().length === 10;

function AppContact() {
  const { sendRequest } = useRequest();

  const {
    value: emailValue,
    isValid: emailisValid,
    hasError: emailError,
    valueChangeHandler: emailChangeHandler,
    BlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: nameValue,
    isValid: nameisValid,
    hasError: nameError,
    valueChangeHandler: nameChangeHandler,
    BlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: numberValue,
    isValid: numberisValid,
    hasError: numberError,
    valueChangeHandler: numberChangeHandler,
    BlurHandler: numberBlurHandler,
    reset: resetNumber,
  } = useInput(number);

  const {
    value: sValue,
    isValid: sValid,
    hasError: sError,
    valueChangeHandler: sChangeHandler,
    BlurHandler: sBlurHandler,
    reset: resetsubject,
  } = useInput(isNotEmpty);

  const {
    value: mValue,
    isValid: mValid,
    hasError: mError,
    valueChangeHandler: mChangeHandler,
    BlurHandler: mBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  if (emailisValid && nameisValid && numberisValid && mValid) {
    formValid = true;
  } else {
    formValid = false;
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!formValid) {
      console.log("errorrrr");
      return;
    }
    const response = await sendRequest(
      "https://advisorywebsite.onrender.com/users/details",
      "POST",
      JSON.stringify({
        name: nameValue,
        email: emailValue,
        subject: sValue,
        message: mValue,
        mobile: numberValue,
      }),
      { "Content-Type": "application/json" }
    );

    console.log(response);

    resetName();
    resetEmail();
    resetMessage();
    resetsubject();
    resetNumber();
  };
  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Signup for the online seminar</h2>
          {/* <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p> */}
        </div>

        <form
          onSubmit={submitHandler}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // width: "50vw",
          }}
        >
          {/* {console.log(isError)} */}
          <div className="form-row w-75 d-flex flex-column align-items-center">
            <div className="form-group col-md-12">
              <input
                id="lastname"
                className="form-control"
                type="name"
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                value={nameValue}
                placeholder="Name"
              />
              {nameError && (
                <p className="error-text">Name shouldn't be empty!</p>
              )}

              {/* {<p style={{ color: "red" }}>{isError}</p>} */}
            </div>
            <br />

            <div className="form-group col-md-12">
              <input
                id="email"
                className="form-control"
                type="text"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={emailValue}
                placeholder="Email"
              />

              {emailError && (
                <p className="error-text">Please Enter a valid Email!</p>
              )}
            </div>
            <br />

            <div className="form-group col-md-12">
              <input
                id="mobile"
                className="form-control"
                type="number"
                onChange={numberChangeHandler}
                onBlur={numberBlurHandler}
                value={numberValue}
                placeholder="Mobile"
              />
              {numberError && (
                <p className="error-text">
                  Mobile Number should have 10 digits!
                </p>
              )}
            </div>
            <br />

            <div className="form-group col-md-12">
              <input
                id="mobile"
                className="form-control"
                type="text"
                onChange={sChangeHandler}
                onBlur={sBlurHandler}
                value={sValue}
                placeholder="Subject"
              />

              {sError && <p className="error-text">Subject can't be empty!</p>}
            </div>
            <br />
            <div className="form-group col-md-12">
              <textarea
                id="mobile"
                className="form-control"
                type="text"
                onChange={mChangeHandler}
                onBlur={mBlurHandler}
                value={mValue}
                placeholder="Message"
              />

              {mError && <p className="error-text">Message can't be empty!</p>}
            </div>
            <br />
            <br />

            <br></br>
            <button
              type="submit"
              disabled={!formValid}
              className="btn btn-primary"
              // style={{ margin: "auto" }}
            >
              Submit
            </button>
            {/* <Link to="/register">
              <button className="submit">Switch to Register</button>
            </Link> */}
            <br></br>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AppContact;
