import { Container } from "@material-ui/core";
import {QuestionPresenterProps} from "./props";
import QuestionPresenter from "./QuestionPresenter";

const Question: React.FC<QuestionPresenterProps> = ({saveQuestion, editQuiz, data}: QuestionPresenterProps) => {
  return (
    <Container>
      <QuestionPresenter saveQuestion={saveQuestion} editQuiz={editQuiz} data={data}/>
    </Container>
  );
};

export default Question;
