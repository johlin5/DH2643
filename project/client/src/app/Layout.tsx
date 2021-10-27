import React from "react";
import { unprotectedRoutes, protectedRoutes } from "./Routes";
import Header from "../components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Cookie from "js-cookie";

const Layout: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      {!Cookie.get("token") && (
        <Switch>
          {unprotectedRoutes.map((nav) => {
            return <Route path={nav.path} exact={nav.exact} component={nav.component} key={nav.path} />;
          })}
        </Switch>
      )}
      {Cookie.get("token") && (
        <>
          <Header />
          <Switch>
            {protectedRoutes.map((nav) => {
              return <Route path={nav.path} exact={nav.exact} component={nav.component} key={nav.path} />;
            })}
          </Switch>
        </>
      )}
    </Router>
  );
};

export default Layout;
