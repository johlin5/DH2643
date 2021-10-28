import { Container } from "@material-ui/core";
import { QuestionPresenterProps } from "./props";
import QuestionPresenter from "./QuestionPresenter";

const Question: React.FC<QuestionPresenterProps> = ({ handleDelete, questionData, onSetQuestion, updateQuestion }: QuestionPresenterProps) => {
  return (
    <Container>
      <QuestionPresenter onSetQuestion={onSetQuestion} handleDelete={handleDelete} questionData={questionData} updateQuestion={updateQuestion} />
    </Container>
  );
};

export default Question;
