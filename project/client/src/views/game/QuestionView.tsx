import { Container, Button, Typography, Grid, makeStyles, createStyles } from "@material-ui/core";
import { Question } from "./GamePresenter";
import { RED, WHITE, SAND } from "../../app/theme";

type QuestionViewProps = {
  question: Question | undefined;
  answer: string;
  onAnswer: (correctId: string) => void;
};

const QuestionView: React.FC<QuestionViewProps> = (props) => {
  const { question, onAnswer, answer } = props;
  const styles = useStyles();

  if (!question) {
    return <>No Quiz</>;
  }

  return (
    <div key={question.id} className={styles.root}>
      <Typography variant="h4">{question.question}</Typography>
      {question.answers.map((ans) => {
        return (
          <Button
            variant="contained"
            onClick={() => {
              onAnswer(ans.id);
            }}
            className={answer === ans.id ? styles.buttonSelected : styles.button}
            key={ans.id}
          >
            {ans.description}
          </Button>
        );
      })}
    </div>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    button: { margin: "8px", color: WHITE, backgroundColor: RED },
    buttonSelected: { margin: "8px", color: WHITE, backgroundColor: SAND },
    root: { textAlign: "center" }
  })
);

export default QuestionView;
