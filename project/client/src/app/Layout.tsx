import React from "react";
import { unprotectedRoutes, protectedRoutes } from "./Routes";
import Header from "../components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { jwtTokenAtom } from "../atoms/account";
import { useRecoilValue } from "recoil";

const Layout: React.FC = () => {
  const hasToken = !!useRecoilValue(jwtTokenAtom);
  return (
    <Router>
      <CssBaseline />
      {!hasToken && (
        <Switch>
          {unprotectedRoutes.map((nav) => {
            return <Route path={nav.path} exact={nav.exact} component={nav.component} key={nav.path} />;
          })}
        </Switch>
      )}
      {hasToken && (
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
