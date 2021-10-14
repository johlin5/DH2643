import { Container } from "@material-ui/core";
import { GREEN } from "../app/theme";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Quiz from "../views/quiz/Index";
import { useRecoilValue } from "recoil";
import { withUserName } from "../selectors/account";

const CreateQuiz: React.FC = () => {
  const [addingQuiz, setAddingQuiz] = useState(false);
  const username = useRecoilValue(withUserName);

  const newQuiz = { title: "", questions: [], creator: username };

  return (
    <Container>
      {addingQuiz ? (
        <Quiz quiz={newQuiz} editState={addingQuiz} />
      ) : (
        <PrimaryButton text="Add" color={GREEN} variant="h6" height="48px" onClick={() => setAddingQuiz(true)} />
      )}
    </Container>
  );
};

export default CreateQuiz;
