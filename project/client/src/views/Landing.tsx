import { Grid, Container, makeStyles, createStyles, Typography, Button } from "@material-ui/core";
import { PURPLE, WHITE, SAND, GREEN, TURQUOISE } from "../app/theme";
import PrimaryButton from "../components/PrimaryButton";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
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
                onClick={() => {
                  history.push("/login");
                }}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={() => {
                  history.push("/register");
                }}
              >
                Register
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
