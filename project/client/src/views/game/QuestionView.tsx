import { Container, Button, Typography, Grid, makeStyles, createStyles } from "@material-ui/core";
import { Question } from "./GamePresenter";

type QuestionViewProps = {
  question: Question | undefined;
  onAnswer: (correct: boolean) => void;
};

const QuestionView: React.FC<QuestionViewProps> = (props) => {
  const { question, onAnswer } = props;
  const styles = useStyles();
  if (!question) {
    return <>No Quiz</>;
  }

  return (
    <div key={question.id}>
      <Typography variant="h6">{question.question}</Typography>
      {question.answers.map((answer) => {
        return (
          <Button
            variant="contained"
            onClick={() => {
              onAnswer(answer.flag);
            }}
            className={styles.button}
            key={answer.id}
          >
            {answer.description}
          </Button>
        );
      })}
    </div>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    button: { padding: "8px" }
  })
);

export default QuestionView;
