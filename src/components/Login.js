import React, { useState, useEffect, Component } from "react";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import cookie from "cookie";
import { TextField, Button, Container } from "@material-ui/core";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  useEffect(() => {
    console.log(username);
    console.log(password);
  }, [username, password]);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();

    document.cookie = "loggedIn=true;max-age=60*1000";
    history.push("/");
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
