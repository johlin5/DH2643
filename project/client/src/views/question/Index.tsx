import { Container } from "@material-ui/core";
import { QuestionPresenterProps } from "./props";
import QuestionPresenter from "./QuestionPresenter";

const Question: React.FC<QuestionPresenterProps> = ({ saveQuestion, handleDelete, data }: QuestionPresenterProps) => {
  return (
    <Container>
      <QuestionPresenter saveQuestion={saveQuestion} handleDelete={handleDelete} data={data} />
    </Container>
  );
};

export default Question;
