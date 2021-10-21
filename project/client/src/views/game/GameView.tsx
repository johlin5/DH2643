import { Container, IconButton, Typography, Divider, makeStyles, createStyles, Button } from "@material-ui/core";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import { WHITE, SAND } from "../../app/theme";
import { Quiz, Question } from "./GamePresenter";
import QuestionView from "./QuestionView";
type GameViewProps = {
  question: Question | undefined;
  onAnswer: (answer: string) => void;
  currentQuestion: number;
  totalQuestions: number;
  title: string | undefined;
  answer: string;
  previusQuestion: () => void;
  nextQuestion: () => void;
  onSubmit: () => void;
};
const GameView: React.FC<GameViewProps> = (props) => {
  const {
    question,
    onAnswer,
    currentQuestion,
    totalQuestions,
    previusQuestion,
    nextQuestion,
    onSubmit,
    title,
    answer
  } = props;
  const styles = useStyles();

  if (!question) {
    return <>No Question</>;
  }

  return (
    <Container className={styles.root}>
      <Typography variant="h2" style={{ paddingBottom: "16px" }}>
        {title}
      </Typography>
      <Divider style={{ marginBottom: "64px" }} />
      <QuestionView question={question} onAnswer={onAnswer} answer={answer} />
      <div className={styles.nav}>
        <div className={styles.desc}>
          <Divider />
          <IconButton onClick={previusQuestion}>
            <ArrowBackIosRoundedIcon />
          </IconButton>
          Question {currentQuestion + 1} out of {totalQuestions}
          <IconButton onClick={nextQuestion}>
            <ArrowForwardIosRoundedIcon />
          </IconButton>
          {totalQuestions === currentQuestion + 1 && (
            <div>
              <Button className={styles.submitButton} onClick={onSubmit}>
                <Typography variant="h5">Submit</Typography>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100%",
      minHeight: "80vh",
      backgroundColor: "white",
      padding: "16px",
      textAlign: "center"
    },
    desc: {
      textAlign: "center"
    },
    submitButton: {
      height: "64px",
      width: "128px",
      backgroundColor: SAND,
      color: WHITE,
      textTransform: "none"
    },
    nav: {
      marginTop: "64px "
    }
  })
);

export default GameView;
