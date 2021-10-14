import { Container, TextField, Typography } from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import { withEdit } from "../../selectors/quiz";
import {AnswerInput, QuestionInput} from "../../utils/types";
import { QuestionPresenterProps } from "./props";
import QuestionForm from "./QuestionForm";
import QuestionView from "./QuestionView";
import { useRecoilValue } from 'recoil';


const QuestionPresenter: React.FC<QuestionPresenterProps> = ({saveQuestion, data}: QuestionPresenterProps) => {
  // States 
//   const [answers, setAnswers] = useState<AnswerInput[]>(data.answers);
  const editQuestion = useRecoilValue(withEdit);
  const [questionData, setQuestionData] = useState<QuestionInput>(data);
  
  const handleSaveQuestion = (questionData: QuestionInput, newEditState: boolean) => {
    setQuestionData(questionData);
    saveQuestion(data.id, questionData);
  };

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <QuestionForm saveQuestion={handleSaveQuestion} data={questionData!}/>
    </Container>
  );
};

export default QuestionPresenter;
