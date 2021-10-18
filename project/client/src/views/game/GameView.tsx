import { Container, Button, Typography, Grid } from "@material-ui/core";
import { Quiz } from "./GamePresenter";

type GameViewProps = { quiz: Quiz | undefined };

const GameView: React.FC<GameViewProps> = (props) => {
  const { quiz } = props;

  if (!quiz) {
    return <>No Quiz</>;
  }

  return (
    <Container>
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

export default GameView;
