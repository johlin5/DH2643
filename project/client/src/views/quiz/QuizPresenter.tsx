import { useMutation } from "@apollo/client";
import { Container, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { SAVE_QUIZ, UPDATE_QUIZ } from "../../services/queries/Quiz";
import { QuizInput } from "../../utils/types";
import QuizForm from "./QuizForm";
import { QuizProps } from "./Props";

const QuizPresenter: React.FC<QuizProps> = ({ quiz }: QuizProps) => {
  const [save, { data, loading, error }] = useMutation(SAVE_QUIZ);
  const [update] = useMutation(UPDATE_QUIZ);
  const history = useHistory();
  const saveQuiz = async (quizData: QuizInput) => {
    const response = quiz.id ? 
    await update({
      variables: {
        id: quiz.id, 
        updateQuizInput: {
          ...quizData
        }
      }
    })
    :
    await save({
      variables: {
        createQuizInput: {
          ...quizData
        }
      }
    });
    history.push("/");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  return (
    <Container component="main" style={{ backgroundColor: "white" }}>
      <Typography variant="h4">Create Your Own Quiz!</Typography>
      <QuizForm quiz={quiz} saveQuiz={saveQuiz} />
    </Container>
  );
};

export default QuizPresenter;
