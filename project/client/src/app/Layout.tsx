import React from "react";
import { navRoutes } from "./Routes";
import Header from "../components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

const Layout: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Switch>
        {navRoutes.map((nav) => {
          return (
            <Route
              path={nav.path}
              exact={nav.exact}
              component={nav.component}
            ></Route>
          );
        })}
      </Switch>
    </Router>
  );
};

export default Layout;
