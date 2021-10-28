import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, makeStyles, createStyles, Grid } from "@material-ui/core";
import { WHITE } from "../app/theme";
import { jwtTokenAtom, isAuthAtom } from "../atoms/account";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import VideogameAssetRoundedIcon from "@material-ui/icons/VideogameAssetRounded";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";

const useStyles = makeStyles(() =>
  createStyles({
    menuButtons: {
      textTransform: "none",
      color: WHITE,
      float: "right",
      marginLeft: "16px"
    },
    links: {}
  })
);
const Header: React.FC = () => {
  const [token, setToken] = useRecoilState(jwtTokenAtom);
  const setIsAuth = useSetRecoilState(isAuthAtom);
  const history = useHistory();
  const logout = () => {
    Cookies.remove("token", { path: "/" });
    Cookies.remove("userName", { path: "/" });
    setToken(null);
    setIsAuth(false);
    history.push("/");
  };
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={2}>
            <Typography
              variant="h6"
              style={{ cursor: "pointer" }}
              onClick={() => {
                history.push("/");
              }}
            >
              Quiz-it
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10} className={classes.links}>
            {token && (
              <>
                <Button className={classes.menuButtons} onClick={logout} startIcon={<ExitToAppRoundedIcon />}>
                  Logout
                </Button>
                <Button
                  component={Link}
                  to="/createquiz"
                  className={classes.menuButtons}
                  startIcon={<AddCircleRoundedIcon />}
                >
                  Create quiz
                </Button>
                <Button
                  component={Link}
                  to="/profile"
                  className={classes.menuButtons}
                  startIcon={<PersonRoundedIcon />}
                >
                  Profile
                </Button>
                <Button
                  component={Link}
                  to="/"
                  className={classes.menuButtons}
                  startIcon={<VideogameAssetRoundedIcon />}
                >
                  Quizes
                </Button>
              </>
            )}
            {!token && (
              <>
                <Button component={Link} to="/register" className={classes.menuButtons}>
                  Register
                </Button>
                <Button component={Link} to="/login" className={classes.menuButtons}>
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
