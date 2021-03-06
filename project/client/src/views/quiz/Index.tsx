import { Container } from "@material-ui/core";
import QuizPresenter from "./QuizPresenter";
import { QuizProps } from "./Props";

const Quiz: React.FC<QuizProps> = ({ quiz }: QuizProps) => {
  return (
    <Container>
      <QuizPresenter quiz={quiz} />
    </Container>
  );
};

export default Quiz;
