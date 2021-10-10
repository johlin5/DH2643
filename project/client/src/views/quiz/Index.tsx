import { Container } from "@material-ui/core";
// import { QuizInput } from "../../utils/types";
import QuizPresenter from "./QuizPresenter";
import { QuizProps } from "./Props";

const Quiz: React.FC<QuizProps> = ({quiz, editState}: QuizProps) => {
  return (
    <Container>
      <QuizPresenter quiz={quiz} editState={editState}/>
    </Container>
  );
};

export default Quiz;
