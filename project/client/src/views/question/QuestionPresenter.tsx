import { Container } from "@material-ui/core";
import { useState } from "react";
import { withEdit } from "../../selectors/quiz";
import { QuestionInput, QuestionType } from "../../utils/types";
import { QuestionProps } from "./props";
import QuestionForm from "./QuestionForm";
import { useRecoilValue } from 'recoil';


const QuestionPresenter: React.FC<QuestionProps> = ({handleSave, handleDelete, data, index}: QuestionProps) => {
  // States 
  const [questionData, setQuestionData] = useState<QuestionType>(data);
  const [qIndex, _] = useState(index);
  
  // Callbacks / Handlers
  const handleSaveForm = (index: number, QuestionFormData: QuestionType) => {
    setQuestionData(QuestionFormData);
    handleSave(index, QuestionFormData);
  }

  const handleAdd = () => {
    setQuestionData({
      ...questionData,
      answers: [...questionData.answers, {description: "", flag: false}]
    });
  }

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <QuestionForm 
        handleSave={handleSaveForm} 
        handleDelete={handleDelete}
        handleAdd={handleAdd} 
        data={questionData!}
        index={qIndex}/>
    </Container>
  );
};

export default QuestionPresenter;
