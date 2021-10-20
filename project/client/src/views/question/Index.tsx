import { Container } from "@material-ui/core";
import {QuestionProps} from "./props";
import QuestionPresenter from "./QuestionPresenter";

const Question: React.FC<QuestionProps> = ({handleSave, handleDelete, data, index}: QuestionProps) => {
  return (
    <Container>
      <QuestionPresenter handleSave={handleSave} handleDelete={handleDelete} data={data} index={index}/>
    </Container>
  );
};

export default Question;
