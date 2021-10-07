import { Container, TextField, Typography } from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import { QuizInput } from "../../utils/types";
import QuizForm from "./QuizForm";
import QuizView from "./QuizView";

const QuizPresenter: React.FC = () => {

  // Api call 
  const mockQuizData: QuizInput = {
    "name": "Hello",
    "questions": [
        {
            "question": "What is my name?",
            "answers": [
                {
                    "id": "0987",
                    "description": "David",
                    "flag": "true"
                }
            ],
            "id": "1234",
            "report": "", 
            "userId": "",
            "upvotes": 0
        }
    ],
    "creator": ""
  };

  // States 
  const [quizData, setQuizData] = useState<QuizInput>(mockQuizData)
  const [editQuiz, setEditQuiz] = useState(false);
  
  // Callbacks / Handlers 
  const handleSetEdit = (newEditState: boolean) => {
      console.log(newEditState ? "Edit Quiz Mode On" : "Edit Quiz Mode Off");
      setEditQuiz(newEditState);
      
  }; 

  const handleSetQuizData = (quizData: QuizInput) => {
    setQuizData(quizData);
    console.log(quizData);
  };

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <Typography variant="h4">Quiznos</Typography>
      {editQuiz ? 
      <QuizForm setEdit={handleSetEdit} editState={editQuiz} data={quizData} setQuizData={handleSetQuizData}/> :
      <QuizView setEdit={handleSetEdit} editState={editQuiz} data={quizData}/>}
    </Container>
  );
};

export default QuizPresenter;
