import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, makeStyles, createStyles, Grid } from "@material-ui/core";
import { WHITE } from "../app/theme";

import { useSetRecoilState } from "recoil";
import { authAtom } from "../atoms/account";

const useStyles = makeStyles(() =>
  createStyles({
    menuButtons: {
      textTransform: "none",
      color: WHITE
    }
  })
);

const Header: React.FC = () => {
  const classes = useStyles();
  const setLogin = useSetRecoilState(authAtom);

  const logout = () => {
    setLogin(false);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <Typography>Quizes with benefits</Typography>
          </Grid>
          <Grid item xs={3}>
            <Button component={Link} to="./" className={classes.menuButtons}>
              Quizes
            </Button>
            <Button component={Link} to="./profile" className={classes.menuButtons}>
              Profile
            </Button>
            <Button
              className={classes.menuButtons}
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
