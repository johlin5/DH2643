import React from "react";
import { navRoutes } from "./Routes";
// Not sure if we are gonna use sessions to store status of authentication
// Could be used to store status of JWT, which is stored in the browser.
import { useSessionContext } from "../services/contexts/SessionContext";
import ProtectedRoute, { ProtectedRouteProps } from "../components/ProtectedRoute";
import Header from "../components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

const Layout: React.FC = () => {
  const [sessionContext, updateSessionContext] = useSessionContext();

  const setRedirectPath = (path: string) => {
    updateSessionContext({...sessionContext, redirectPath: path});
  }

  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: !!sessionContext.isAuthenticated,
    authenticationPath: '/login',
    redirectPath: sessionContext.redirectPath,
    setRedirectPath: setRedirectPath
  };

  return (
    <Router>
      <CssBaseline />
      <Header />
      <Switch>
        {navRoutes.map((nav) => {
          return <Route path={nav.path} exact={nav.exact} component={nav.component}></Route>;
        })}
      </Switch>
    </Router>
  );

    // return (
    //   <Router>
    //     <CssBaseline />
    //     <Header />
    //     <Switch>
    //       {navRoutes.map((nav) => {
    //         return (
    //           nav.path === '/login' || nav.path === '/' ? <Route path={nav.path} exact={nav.exact} component={nav.component}></Route>  :
    //           <ProtectedRoute {...defaultProtectedRouteProps} path={nav.path} exact={nav.exact} component={nav.component}/>
    //         )
    //       })}
    //     </Switch>
    //   </Router>
    // );
};



export default Layout;
