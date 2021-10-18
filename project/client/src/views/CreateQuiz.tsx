import { Container } from "@material-ui/core";
import { GREEN } from "../app/theme";
import PrimaryButton from "../components/PrimaryButton";
import { useRecoilState } from "recoil";
import Quiz from "../views/quiz/Index";
import { useRecoilValue } from "recoil";
import { withUserName } from "../selectors/account";
import { canEditAtom } from "../atoms/quiz";
import { FECTH_BY_CREATOR } from "../services/queries/Quiz";
import { useQuery } from "@apollo/client";
import Spinner from "../components/Spinner";
import { QuizInput } from "utils/types";

const CreateQuiz: React.FC = () => {
  const [edit, setEdit] = useRecoilState(canEditAtom);
  const username = useRecoilValue(withUserName);

  const newQuiz = { title: "", questions: [], creator: username ? username : "" };

  return (
    <Container>
        <Quiz quiz={newQuiz}/> 
    </Container>
  );
};

export default CreateQuiz;
