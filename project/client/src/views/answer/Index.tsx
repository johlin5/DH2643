import { Container } from "@material-ui/core";
import { AnswerPresenterProps } from "./props";
import AnswerPresenter from "./AnswerPresenter";


const Answer: React.FC<AnswerPresenterProps> = ({saveAnswerData, editQuestion, data}: AnswerPresenterProps) => {
  return (
    <Container>
      <AnswerPresenter saveAnswerData={saveAnswerData} editQuestion={editQuestion} data={data}/>
    </Container>
  );
};

export default Answer;
