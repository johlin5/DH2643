import { useMutation } from "@apollo/client";
import { Container, TextField, Typography } from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import { SAVE_QUIZ } from "../../services/queries/Quiz";
import { UPLOAD_IMAGE } from "services/queries/Images";
import { QuizInput } from "../../utils/types";
import QuizForm from "./QuizForm";
import { QuizProps } from "./Props";
import { withEdit } from "../../selectors/quiz";
import { useRecoilValue } from "recoil";

const QuizPresenter: React.FC<QuizProps> = ({quiz}: QuizProps) => {
  const [save, { data, loading, error }] = useMutation(SAVE_QUIZ);

  // const [token, setToken] = useRecoilState(jwtTokenAtom);
  const history = useHistory();

  /**
   * I believe there is a better solution for using the mutation with
   * react useState.
   * @param quizData
   */
  const saveQuiz = async (quizData: QuizInput) => {
    const response = await save({
      variables: {
        createQuizInput: {
          ...quizData
        }
      }
    });
    history.push("/");
    console.log(response);
  };

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

  const handleSetQuizData = (quizData: QuizInput) => {
    setQuizData(quizData);
    console.log("Save to backend", quizData);
    saveQuiz(quizData);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <Typography variant="h4">Create Your Own Quiz!</Typography>
      <QuizForm setEdit={handleSetEdit} quiz={quizData} setQuizData={handleSetQuizData} setImageData={handleImageUpload}/>
    </Container>
  );
};

export default QuizPresenter;
