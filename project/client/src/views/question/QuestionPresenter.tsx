import { Container, TextField, Typography } from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import { withEdit } from "../../selectors/quiz";
import {AnswerInput, QuestionInput} from "../../utils/types";
import { QuestionPresenterProps } from "./props";
import QuestionForm from "./QuestionForm";
import { useRecoilValue } from 'recoil';
import { withUserName } from "../../selectors/account";


const QuestionPresenter: React.FC<QuestionPresenterProps> = ({saveQuestion, handleDelete, data}: QuestionPresenterProps) => {
  // States 
  const editQuestion = useRecoilValue(withEdit);
  const creator = useRecoilValue(withUserName);
  const [questionData, setQuestionData] = useState<QuestionInput>(data);
  

  // Callbacks / Handlers
  const handleSave = (data: QuestionInput) => {
    // console.log(data);
    setQuestionData(data);
    saveQuestion(data);
  }

  const handleAdd = () => {
    const answerId = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
    
    setQuestionData({
      ...questionData,
      answers: [...questionData.answers, {id: answerId, description: "", flag: "0"}]
    });
  }

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <QuestionForm 
        handleSave={handleSave} 
        handleDelete={handleDelete}
        handleAdd={handleAdd} 
        data={questionData!}/>
    </Container>
  );
};

export default QuestionPresenter;
