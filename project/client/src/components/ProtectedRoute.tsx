import { Redirect, Route } from "react-router";

export default function ProtectedRoute({...routeProps}) {

  const authenticated = localStorage.getItem('jwt');

  if (authenticated) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: "/" }} />;
  }
}
