import { Link } from "react-router-dom"
import { AppBar, Toolbar } from '@material-ui/core';

const Header = () => {

  return <AppBar position="sticky">   
  <Toolbar>
  <ul>
  <li>
    <Link to="/">Quizes</Link>
  </li>
  <li>
    <Link to="/profile">Profile</Link>
  </li>
  <li>
    <Link to="/login">Login</Link>
  </li>
</ul>  
</Toolbar>
</AppBar>
}

export default Header;

