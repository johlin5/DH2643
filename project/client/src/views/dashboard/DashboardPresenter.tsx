import { Container } from "@material-ui/core";
import { FETCH_ALL_QUIZES } from "../../services/queries/Quiz";
import { useQuery } from "@apollo/client";
import {
  Typography,
  CardActions,
  Card,
  makeStyles,
  createStyles,
  Grid,
  CardContent,
  CardMedia,
  Button
} from "@material-ui/core";
import GameCard from "../../components/Card";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "80vh",
      backgroundColor: "white",
      padding: "16px"
    }
  })
);
const DashboardPresenter: React.FC = () => {
  const { loading, error, data } = useQuery(FETCH_ALL_QUIZES);
  const classes = useStyles();

  console.log(data);
  return (
    <Container component="main" className={classes.root}>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <GameCard
            title="Math quiz"
            author="Johan"
            body="play this quiz"
            play={() => {
              console.log("play");
            }}
            info={() => {
              console.log("info");
            }}
          />
        </Grid>
        <Grid xs={3}>
          <GameCard
            title="Math quiz"
            author="Johan"
            body="play this quiz"
            play={() => {
              console.log("play");
            }}
            info={() => {
              console.log("info");
            }}
          />
        </Grid>
        <Grid xs={3}>
          <GameCard
            title="Math quiz"
            author="Johan"
            body="play this quiz"
            play={() => {
              console.log("play");
            }}
            info={() => {
              console.log("info");
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardPresenter;
