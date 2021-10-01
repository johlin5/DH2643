import { Grid, Container, makeStyles, createStyles, Typography, Button } from "@material-ui/core";
import { PURPLE, WHITE, SAND, GREEN, TURQUOISE } from "../app/theme";
import { Link } from "react-router-dom";

import PrimaryButton from "../components/PrimaryButton";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: SAND,
      color: WHITE,
      height: "100vh",
      width: "100%"
    },
    button: {
      textTransform: "none",
      height: "100px"
    }
  })
);

const Landing: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Typography variant="h2">Quiz</Typography>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <Button
                style={{ height: "64px", textTransform: "none", color: "white" }}
                component={Link}
                to="/login"
                variant="contained"
                color="primary"
                fullWidth
              >
                <Typography variant="h4">Login</Typography>
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                style={{ height: "64px", textTransform: "none", color: "white" }}
                component={Link}
                to="/register"
                variant="contained"
                color="primary"
                fullWidth
              >
                <Typography variant="h4">Register</Typography>
              </Button>{" "}
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Landing;
