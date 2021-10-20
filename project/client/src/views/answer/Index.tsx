import { Container } from "@material-ui/core";
import AnswerPresenter from "./AnswerPresenter";
import { AnswerProps } from "./props";

const Answer: React.FC<AnswerProps> = ({ handleSave, handleDelete, data, index }: AnswerProps) => {
  return (
    <Container>
      <AnswerPresenter handleSave={handleSave} handleDelete={handleDelete} data={data} index={index} />
    </Container>
  );
};

export default Answer;
