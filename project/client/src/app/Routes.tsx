import DashboardPresenter from "../views/dashboard";
import Login from "../views/login/LoginPresenter";
import Profile from "../views/profile";
import Landing from "../views/Landing";
import Register from "../views/register/Index";
import Quizzes from "../views/Quizzes";
import CreateQuiz from "../views/CreateQuiz";
import Play from "../views/game";

export type AppRoute = {
  path: string;
  component: React.FC;
  exact: boolean;
  requireLoggedIn: boolean;
};

const NotFound: React.FC = () => {
  return <>Not found</>;
};

export const unprotectedRoutes: AppRoute[] = [
  { path: "/", component: Landing, exact: true, requireLoggedIn: false },
  { path: "/login", component: Login, exact: true, requireLoggedIn: false },
  { path: "/register", component: Register, exact: true, requireLoggedIn: false },
  { path: "/quizes", component: Quizzes, exact: true, requireLoggedIn: false },
  { path: "*", component: NotFound, exact: false, requireLoggedIn: false }
];

export const protectedRoutes: AppRoute[] = [
  { path: "/", component: DashboardPresenter, exact: true, requireLoggedIn: true },
  { path: "/profile", component: Profile, exact: true, requireLoggedIn: true },
  { path: "/createquiz", component: CreateQuiz, exact: true, requireLoggedIn: true },
  { path: "/myquizes", component: Quizzes, exact: true, requireLoggedIn: true },
  { path: "/play/:id", component: Play, exact: false, requireLoggedIn: true },

  { path: "*", component: NotFound, exact: false, requireLoggedIn: false }
];
