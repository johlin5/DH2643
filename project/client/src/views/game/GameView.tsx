import { Container, Button, Typography, Grid, makeStyles, createStyles } from "@material-ui/core";
import { Quiz } from "./GamePresenter";

type GameViewProps = { quiz: Quiz | undefined };

const GameView: React.FC<GameViewProps> = (props) => {
  const { quiz } = props;
  const styles = useStyles();
  if (!quiz) {
    return <>No Quiz</>;
  }

  return (
    <Container className={styles.root}>
      {quiz?.title}

      {quiz.questions.map((question) => {
        return (
          <div key={question.id}>
            <Typography variant="h3">{question.question}</Typography>
            {question.answers.map((answer) => {
              return (
                <Button variant="outlined" key={answer.id}>
                  {answer.description}
                </Button>
              );
            })}
          </div>
        );
      })}
    </Container>
  );
};

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

export default GameView;
