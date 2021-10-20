import { useMutation } from "@apollo/client";
import { Container, Typography } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { SAVE_QUIZ } from "../../services/queries/Quiz";
import { QuizInput } from "../../utils/types";
import QuizForm from "./QuizForm";
import { QuizProps } from "./Props";
import { withEdit } from "../../selectors/quiz";
import { useRecoilValue } from "recoil";

const QuizPresenter: React.FC<QuizProps> = ({ quiz }: QuizProps) => {
  const [save, { data, loading, error }] = useMutation(SAVE_QUIZ);

  // const [token, setToken] = useRecoilState(jwtTokenAtom);
  const history = useHistory();

  /**
   * I believe there is a better solution for using the mutation with
   * react useState.
   * @param quizData
   */
  const saveQuiz = async (quizData: QuizInput) => {
    const answers = quizData.questions.map((q) => q.answers);
    // Messy solution clean up the form data when sending it to backend.
    const cleanedQuestions = quizData.questions.map(
      ({ id, answers: [{ AnswerId, ...AnswerRest }], ...questionRest }) => questionRest
    );
    const response = await save({
      variables: {
        createQuizInput: {
          ...quizData,
          questions: cleanedQuestions
        }
      }
    });
    history.push("/");
  };

  // States
  const [quizData, setQuizData] = useState<QuizInput>(quiz);
  const editState = useRecoilValue(withEdit);

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
