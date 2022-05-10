import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Home from "./containers/Home";
import About from "./components/About";
import Car from "./components/Car";
import Login from "./components/Login";

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies['loggedin'] ? true : false;
};





const ProtectedRoute = ({ component: Component, ...rest }) => {
    console.log('REST', rest)
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() === true ? <Component /> : <Redirect to="/login" />
      }
    />
  );
};
// Write ProtectedRoute function here

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute path="/about" component={About} />
      <ProtectedRoute path="/car/:id" component={Car} />
    </Switch>
  );
};

export default Router;
