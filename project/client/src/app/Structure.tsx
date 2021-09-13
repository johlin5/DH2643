import React from 'react';
import Frontpage from "./views/Frontpage"
import Login from "./views/Login";
import Profile from "./views/Profile";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {CssBaseline} from "@material-ui/core";

function Structure() {
  return (
    <>
    <CssBaseline />
    <Router>
    <Header/>
      <Switch>
        <Route exact path="/">
          <Frontpage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
  </Router>
  </>
  );
}

export default Structure;
