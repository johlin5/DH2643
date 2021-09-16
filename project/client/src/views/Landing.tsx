import { Grid, Container, makeStyles, createStyles, Typography } from "@material-ui/core";
import { PURPLE, WHITE, SAND, GREEN, TURQUOISE } from "../app/theme";
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
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <Typography variant="h2">Quiz</Typography>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={2}>
              <PrimaryButton text="Register" color={PURPLE} height="64px" />
            </Grid>
            <Grid item xs={2}>
              <PrimaryButton text="Login" color={TURQUOISE} height="64px" />
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Landing;
