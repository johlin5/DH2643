import { Grid, Container, makeStyles, createStyles } from "@material-ui/core";
import GameCard from "../../components/Card";
import { QuizData } from "./DashboardPresenter";

type DashboardViewProps = { onPlay: () => void; quizData: QuizData };

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
const DashboardView: React.FC<DashboardViewProps> = ({ onPlay, quizData }) => {
  const classes = useStyles();
  return (
    <Container component="main" className={classes.root}>
      <Grid container spacing={2}>
        {quizData.findAllQuiz.map((quiz) => {
          return (
            <Grid item xs={6} sm={4} md={3}>
              <GameCard
                title={quiz.title}
                author="N/A"
                body="N/A"
                play={onPlay}
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

export default DashboardView;
