import { Container } from "@material-ui/core";
import Quiz from "../views/quiz/Index";
import { useRecoilValue } from "recoil";
import { withUserName } from "../selectors/account";

const CreateQuiz: React.FC = () => {
  const username = useRecoilValue(withUserName);

  const newQuiz = { title: "", description: "", questions: [], creator: username ? username : "" };

  return (
    <Container>
        <Quiz quiz={newQuiz}/> 
    </Container>
  );
};

export default CreateQuiz;
