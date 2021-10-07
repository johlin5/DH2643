import { Container, TextField, Typography } from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import {AnswerInput, QuestionInput} from "../../utils/types";
import { QuestionPresenterProps } from "./props";
import QuestionForm from "./QuestionForm";
import QuestionView from "./QuestionView";


const QuestionPresenter: React.FC<QuestionPresenterProps> = ({saveQuestion, editQuiz, data}: QuestionPresenterProps) => {
  // States 
//   const [answers, setAnswers] = useState<AnswerInput[]>(data.answers);
  const [editQuestion, setEditQuestion] = useState(false);
  const [questionData, setQuestionData] = useState<QuestionInput>(data);
  
  // Callbacks / Handlers
  const handleSetEdit = (newEditState: boolean) => {
    console.log(newEditState ? "Edit Question Mode On" : "Edit Question Mode Off");
    setEditQuestion(newEditState);
  };

  const handleSaveQuestion = (questionData: QuestionInput, newEditState: boolean) => {
    setQuestionData(questionData);
    setEditQuestion(newEditState);
    saveQuestion(data.id, questionData);
  };

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      {editQuestion ? 
      <QuestionForm saveQuestion={handleSaveQuestion} editQuiz={editQuestion} data={questionData!}/> : 
      <QuestionView setEdit={handleSetEdit} editQuiz={editQuiz} data={questionData!}/>}
    </Container>
  );
};

export default QuestionPresenter;
