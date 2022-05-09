import React, { useState, useEffect, Component } from "react";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import cookie from "cookie";
import { TextField, Button, Container } from "@material-ui/core";

function App() {
  // const [state, setState] = useState({
  //   username: "",
  //   password: "",
  // });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  useEffect(() => {
    console.log(username);
    console.log(password);
  }, [username, password]);

  const handleUsername = (e) => {
    // const state = { ...state };
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    // const state = { ...state };
    setPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();

    // set cookie here
    // cookie.serialize("loggedIn", true);
    // const cookies = cookie.parse(document.cookie);
    // console.log(cookie);
    // history.push("/");
    // set loggedIn = true and max-age = 60*1000 (one minute)

    // window.location.replace("/");
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={login}>
          <TextField
            onChange={handleUsername}
            value={username}
            name="username"
            label="Username"
            type="text"
          />
          <TextField
            onChange={handlePassword}
            value={password}
            name="password"
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default App;
