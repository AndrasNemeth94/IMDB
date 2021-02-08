import React, { useState } from "react";
import axios from "axios";
import "./LogIn.css";
import "../home/Home.css";
import translate from "../../i18n/messages/translate";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, logIn } from "../../actions/index";
import { FormControl, FormGroup } from "react-bootstrap";

function LogIn() {
  const URL = "http://localhost:3012/fakeApi/fakeApi.php";
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.isLoggedIn);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const validateForm = () => {
    return email.length > 0 && pwd.length > 0;
  };

  const submit = () => {
    let user;
    user = {
      email: email,
      password: pwd,
    };
    console.log("front küldésre: " + JSON.stringify(user));
    axios
      .post("http://localhost:3012/fakeApi/fakeApi.php", user)
      .then((res) => {
        if (res.data === "success") {
          dispatch(logIn());
        } else {
          alert("error occured during validation!");
        }
      })
      .catch((error) => {
        console.log("Hiba front: " + error);
      });
  };

  return (
    <div className="home-container">
      {/*<button onClick={() => dispatch(logIn())}>Log in</button>*/}

      <div className="login-wrapper">
        <h1>Welcome to LoMLM!</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email">
            <label htmlFor="login-label">email:</label>
            <br />
            <FormControl
              className="form-input"
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <br />
          <FormGroup controlId="password">
            <label htmlFor="login-label">password:</label>
            <br />
            <FormControl
              className="form-input"
              autoFocus
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </FormGroup>
          <br />
          <button
            className="submit"
            type="submit"
            disabled={!validateForm()}
            onClick={submit}
          >
            Log in
          </button>
        </form>
        <a className="registration-link" href="#">
          Sign up
        </a>
      </div>
      {loggedIn ? (
        <span style={{ color: "green" }}>Bejelentkezve</span>
      ) : (
        <span style={{ color: "red" }}>Kijelentkezve</span>
      )}
    </div>
  );
}
export default LogIn;
