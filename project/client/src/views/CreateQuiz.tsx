import { Container } from "@material-ui/core";
import { GREEN } from "../app/theme";
import PrimaryButton from "../components/PrimaryButton";
import { useRecoilState } from "recoil";
import Quiz from "../views/quiz/Index";
import { useRecoilValue } from "recoil";
import { withUserName } from "../selectors/account";
import { canEditAtom } from "../atoms/quiz";

const CreateQuiz: React.FC = () => {
  const [edit, setEdit] = useRecoilState(canEditAtom);
  const username = useRecoilValue(withUserName);

  const newQuiz = { title: "", questions: [], creator: username ? username : "" };

  return (
    <Container>
        {edit ? <Quiz quiz={newQuiz}/> 
        : <PrimaryButton text="Add" color={GREEN} variant="h6" height="48px" onClick={() => setEdit(true)} />}
    </Container>
  );
};

export default CreateQuiz;
