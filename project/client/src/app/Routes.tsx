import Frontpage from "./views/Frontpage"
import Login from "./views/Login";
import Profile from "./views/Profile";

export type AppRoute = {
  path: string;
  component: React.FC;
  exact: boolean;
  requireLoggedIn: boolean;
};


const NotFound:React.FC = () =>{
  return <>Not found</>
}

export const navRoutes : AppRoute[] = [
  {path: "/", component: Frontpage, exact:true, requireLoggedIn:false},
  {path: "/login", component: Login, exact:true, requireLoggedIn:false},
  {path: "/profile", component: Profile, exact:true, requireLoggedIn:false},
  {path: "*", component: NotFound ,exact:false, requireLoggedIn:false},
]

