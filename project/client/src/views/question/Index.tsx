import { Container } from "@material-ui/core";
import {QuestionPresenterProps} from "./props";
import QuestionPresenter from "./QuestionPresenter";

const Question: React.FC<QuestionPresenterProps> = ({saveQuestion, data}: QuestionPresenterProps) => {
  return (
    <Container>
      <QuestionPresenter saveQuestion={saveQuestion} data={data}/>
    </Container>
  );
};

export default Question;
