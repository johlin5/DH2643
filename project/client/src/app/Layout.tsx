import React, { useEffect } from "react";
import { unAuthRoutes, authRoutes } from "./Routes";
import ProtectedRoute from "../routing/protectedRoute";
import Header from "../components/Header";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { useRecoilValue } from "recoil";
import { authAtom } from "../atoms/account";

const Layout: React.FC = () => {
  const isLoggedIn = useRecoilValue(authAtom);

  const LoggedInRoutes = (
    <>
      {authRoutes.map((nav) => (
        <ProtectedRoute
          authenticationPath={nav.path}
          exact={nav.exact}
          component={nav.component}
          key={nav.path}
          isAuthenticated={isLoggedIn}
        />
      ))}
    </>
  );

  const NotLoggedinRoutes = (
    <>
      {unAuthRoutes.map((nav) => (
        <Route path={nav.path} exact={nav.exact} component={nav.component} key={nav.path} />
      ))}
    </>
  );

  console.log(LoggedInRoutes);

  return (
    <Router>
      <CssBaseline />
      {isLoggedIn && <Header />}
      <Switch>
        {isLoggedIn && LoggedInRoutes}
        {!isLoggedIn && NotLoggedinRoutes}
        {/* {navRoutes.map((nav) => {
          if (nav.requireLoggedIn && isLoggedIn) {
            return (
              <ProtectedRoute
                authenticationPath={nav.path}
                exact={nav.exact}
                component={nav.component}
                key={nav.path}
                isAuthenticated={isLoggedIn}
              />
            );
          }
          if (!isLoggedIn) {
            return <Route path={nav.path} exact={nav.exact} component={nav.component} key={nav.path} />;
          } */}
      </Switch>
    </Router>
  );
};

export default Layout;
