import { Container } from "@material-ui/core";
import { GREEN } from "../app/theme";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Quiz from "../views/quiz/Index";

const CreateQuiz: React.FC = () => {
  const [addingQuiz, setAddingQuiz] = useState(false);
  return (
    <Container>
        {addingQuiz ? <Quiz quiz={{title: "", questions: [], creator: ""}} editState={addingQuiz}/> 
        : <PrimaryButton text="Add" color={GREEN} variant="h6" height="48px" onClick={() => setAddingQuiz(true)} />}
    </Container>
  );
};

export default CreateQuiz;
