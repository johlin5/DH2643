import Frontpage from "../views/Frontpage";
import Login from "../views/login/LoginForm";
import Profile from "../views/Profile";
import Landing from "../views/Landing";
import Register from "../views/register/Index";

export type AppRoute = {
  path: string;
  component: React.FC;
  exact: boolean;
  requireLoggedIn: boolean;
};

const NotFound: React.FC = () => {
  return <>Not found</>;
};

export const navRoutes: AppRoute[] = [
  { path: "/", component: Landing, exact: true, requireLoggedIn: false },
  { path: "/login", component: Login, exact: true, requireLoggedIn: false },
  { path: "/profile", component: Profile, exact: true, requireLoggedIn: false },
  { path: "/register", component: Register, exact: true, requireLoggedIn: false },
  { path: "*", component: NotFound, exact: false, requireLoggedIn: false }
];
