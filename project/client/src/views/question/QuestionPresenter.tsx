import { Container } from "@material-ui/core";
import { useState } from "react";
import { withEdit } from "../../selectors/quiz";
import { QuestionInput } from "../../utils/types";
import { QuestionPresenterProps } from "./props";
import QuestionForm from "./QuestionForm";
import { useRecoilValue } from 'recoil';


const QuestionPresenter: React.FC<QuestionPresenterProps> = ({saveQuestion, handleDelete, data}: QuestionPresenterProps) => {
  // States 
  const editQuestion = useRecoilValue(withEdit);
  const [questionData, setQuestionData] = useState<QuestionInput>(data);
  

  // Callbacks / Handlers
  const handleSave = (QuestionFormData: QuestionInput) => {
    console.log(QuestionFormData);
    setQuestionData(QuestionFormData);
    saveQuestion(QuestionFormData);
  }

  const handleAdd = () => {
    const answerId = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
    
    setQuestionData({
      ...questionData,
      answers: [...questionData.answers, {AnswerId: answerId, description: "", flag: false}]
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
