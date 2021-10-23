import { Grid, Container, makeStyles, createStyles } from "@material-ui/core";
import GameCard from "../../components/Card";
import { QuizData } from "./DashboardPresenter";

type DashboardViewProps = { onPlay: (id: string) => void; quizData: QuizData };

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
            <Grid item={true} xs={6} sm={4} md={3} key={quiz.id}>
              <GameCard
                title={quiz.title}
                author={quiz.creator}
                body={quiz.description !== null || "" ? quiz.description : "N/A"}
                play={() => {
                  onPlay(quiz.id);
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

export default DashboardView;
