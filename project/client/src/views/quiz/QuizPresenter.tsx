import { useMutation } from "@apollo/client";
import { Container, Typography } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { SAVE_QUIZ } from "../../services/queries/Quiz";
import { UPLOAD_IMAGE } from "services/queries/Images";
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
    console.log(response);
  };

<<<<<<< HEAD
  // States 
  const [quizData, setQuizData] = useState<QuizInput>(quiz);
  const [image, setQuizImage] = useState<any>(null);
  const editState = useRecoilValue(withEdit);

  // Callbacks / Handlers 
  const handleImageUpload = (event: any) => {
    const image = event.target.files[0];
    if(!image) {
      return;
    }
    setQuizImage(image);
    console.log(image);
  };
  
  const handleSetEdit = (newEditState: boolean) => {
      console.log(newEditState ? "Edit Quiz Mode On" : "Edit Quiz Mode Off");
  }; 

=======
  // States
  const [quizData, setQuizData] = useState<QuizInput>(quiz);
  const editState = useRecoilValue(withEdit);

  // Callbacks / Handlers
>>>>>>> e540aecadface882fb6d2d0eff500e5b6b4c56e2
  const handleSetQuizData = (quizData: QuizInput) => {
    setQuizData(quizData);
    saveQuiz(quizData);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  return (
    <Container component="main" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <Typography variant="h4">Create Your Own Quiz!</Typography>
<<<<<<< HEAD
      <QuizForm setEdit={handleSetEdit} quiz={quizData} setQuizData={handleSetQuizData} setImageData={handleImageUpload}/>
=======
      <QuizForm quiz={quizData} setQuizData={handleSetQuizData} />
>>>>>>> e540aecadface882fb6d2d0eff500e5b6b4c56e2
    </Container>
  );
};

export default QuizPresenter;
