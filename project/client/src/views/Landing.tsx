import { Grid, Container, makeStyles, createStyles, Typography, Button, TextField } from "@material-ui/core";
import { PURPLE, WHITE, SAND, GREEN, TURQUOISE } from "../app/theme";
import PrimaryButton from "../components/PrimaryButton";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: WHITE,
      color: PURPLE,
      height: "100vh",
      width: "100%"
    },
    button: {
      textTransform: "none",
      height: "100px"
    },
    centerContent: {
      backgroundColor: WHITE,
      padding: "16px",
      marginTop: "32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  })
);

const Landing: React.FC = () => {
  const history = useHistory();

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <Grid container direction={"column"} spacing={2}>
        <Grid item>
          <Typography variant="h4">Quiz-it</Typography>
        </Grid>
        <Grid item>
          <PrimaryButton
            type="submit"
            text="Already a user?"
            color={PURPLE}
            variant="h5"
            height="48px"
            onClick={() => history.push("/login")}
          />
        </Grid>
        <Grid item>
          <PrimaryButton
            type="submit"
            text="Register new user"
            color={PURPLE}
            variant="h5"
            height="48px"
            onClick={() => history.push("/register")}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Landing;
