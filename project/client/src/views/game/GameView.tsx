import { Container, Button, Typography, Grid, makeStyles, createStyles } from "@material-ui/core";
import { Quiz, Question } from "./GamePresenter";
import QuestionView from "./QuestionView";

type GameViewProps = {
  question: Question | undefined;
  onAnswer: (answer: boolean) => void;
  currentQuestion: number;
  totalQuestions: number;
  previusQuestion: () => void;
  nextQuestion: () => void;
  onSubmit: () => void;
};

const GameView: React.FC<GameViewProps> = (props) => {
  const { question, onAnswer, currentQuestion, totalQuestions, previusQuestion, nextQuestion, onSubmit } = props;
  const styles = useStyles();

  if (!question) {
    return <>No Question</>;
  }

  return (
    <Container className={styles.root}>
      <QuestionView question={question} onAnswer={onAnswer} />
      <>
        Question {currentQuestion + 1} out of {totalQuestions}
        <div>
          <Button onClick={previusQuestion}>{"< Previous"}</Button>
          <Button onClick={nextQuestion}>{" Next >"}</Button>
        </div>
        {totalQuestions === currentQuestion + 1 && <Button onClick={onSubmit}>Submit</Button>}
      </>
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
