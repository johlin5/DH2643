import { Redirect, Route, RouteProps } from "react-router";

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
} & RouteProps;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function ProtectedRoute({ isAuthenticated, authenticationPath, ...routeProps }: ProtectedRouteProps) {
  if (isAuthenticated) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: authenticationPath }} />;
  }
}
