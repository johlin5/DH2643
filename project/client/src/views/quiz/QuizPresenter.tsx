import { useMutation } from "@apollo/client";
import { Container, Typography } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { SAVE_QUIZ } from "../../services/queries/Quiz";
import { QuizInput } from "../../utils/types";
import QuizForm from "./QuizForm";
import { QuizProps } from "./Props";

const QuizPresenter: React.FC<QuizProps> = ({ quiz }: QuizProps) => {
  const [save, { data, loading, error }] = useMutation(SAVE_QUIZ);
  const history = useHistory();
  const saveQuiz = async (quizData: QuizInput) => {
    const response = await save({
      variables: {
        createQuizInput: {
          ...quizData
        }
      }
    });
    history.push("/");
  };

  // States
  const [quizData, setQuizData] = useState<QuizInput>(quiz);

  // Callbacks / Handlers
  const handleSetQuizData = (quizData: QuizInput) => {
    setQuizData(quizData);
    saveQuiz(quizData);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  return (
    <Container component="main" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <Typography variant="h4">Create Your Own Quiz!</Typography>
      <QuizForm quiz={quizData} setQuizData={handleSetQuizData} />
    </Container>
  );
};

export default QuizPresenter;
