import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button, Theme, makeStyles, createStyles, Grid } from '@material-ui/core';
import {WHITE} from "../app/theme";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButtons: {
      textTransform: "none",
      color: WHITE
    },

  })
);
const Header:React.FC = (props) => {
  const classes = useStyles();
  return <AppBar position="sticky">   
  <Toolbar>
    <Grid container spacing={1}>
      <Grid item xs={10}>
        <Typography>Quizes with benefits</Typography>
      </Grid>
      <Grid item xs={2}>
        <Button component={Link} to="./" className={classes.menuButtons}>Quizes</Button>
        <Button component={Link} to="./profile" className={classes.menuButtons}>Profile</Button>
        <Button component={Link} to="./login" className={classes.menuButtons}>Login</Button>
      </Grid>
    </Grid>

</Toolbar>
</AppBar>
}

export default Header;

