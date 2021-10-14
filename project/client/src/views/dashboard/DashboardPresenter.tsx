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
      height: "100%",
      minHeight: "80vh",
      backgroundColor: "white",
      padding: "16px"
    }
  })
);

type Quiz = {
  id: string;
  title: string;
};

type QuizData = { findAllQuiz: Quiz[] };

const DashboardPresenter: React.FC = () => {
  const { loading, error, data } = useQuery<QuizData>(FETCH_ALL_QUIZES);
  const classes = useStyles();

  if (loading || !data) {
    return <>Loading</>;
  }

  return (
    <Container component="main" className={classes.root}>
      <Grid container spacing={2}>
        {data.findAllQuiz.map((quiz) => {
          return (
            <Grid item xs={6} sm={4} md={3}>
              <GameCard
                title={quiz.title}
                author="N/A"
                body="N/A"
                play={() => {
                  console.log("play");
                }}
                info={() => {
                  console.log("info");
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default DashboardPresenter;
