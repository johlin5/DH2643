import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, makeStyles, createStyles, Grid } from "@material-ui/core";
import { WHITE } from "../app/theme";
import { jwtTokenAtom } from "../atoms/account";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
    menuButtons: {
      textTransform: "none",
      color: WHITE
    }
  })
);
const Header: React.FC = () => {
  const [token, setToken] = useRecoilState(jwtTokenAtom);
  const history = useHistory();
  const logout = () => {
    setToken(null);
    localStorage.removeItem("jwtToken");
    history.push("/");
    console.log("log out");
  };
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <Typography>Quizes with benefits</Typography>
          </Grid>
          <Grid item xs={3}>
            {token && (
              <>
                <Button component={Link} to="./" className={classes.menuButtons}>
                  Quizes
                </Button>
                <Button component={Link} to="./profile" className={classes.menuButtons}>
                  Profile
                </Button>
                <Button component={Link} to="./createquiz" className={classes.menuButtons}>
                  Create quiz
                </Button>
                <Button className={classes.menuButtons} onClick={logout}>
                  Logout
                </Button>
              </>
            )}
            {!token && (
              <>
                <Button component={Link} to="./register" className={classes.menuButtons}>
                  Register
                </Button>
                <Button component={Link} to="./login" className={classes.menuButtons}>
                  Login
                </Button>
              </>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
