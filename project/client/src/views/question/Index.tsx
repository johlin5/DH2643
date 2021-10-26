import { Container } from "@material-ui/core";
import { QuestionPresenterProps } from "./props";
import QuestionPresenter from "./QuestionPresenter";

const Question: React.FC<QuestionPresenterProps> = ({ saveQuestion, handleDelete, questionData }: QuestionPresenterProps) => {
  return (
    <Container>
      <QuestionPresenter saveQuestion={saveQuestion} handleDelete={handleDelete} questionData={questionData} />
    </Container>
  );
};

export default Question;
