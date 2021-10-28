import { Container } from "@material-ui/core";
import Quiz from "../views/quiz/Index";
import { useRecoilValue } from "recoil";
import { withUserName } from "../selectors/account";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { SAVE_QUIZ } from "../services/queries/Quiz";
import Spinner from "../components/Spinner";

const CreateQuiz: React.FC = () => {
  const username = useRecoilValue(withUserName);
  
  const [save, { data, loading, error }] = useMutation(SAVE_QUIZ);
  const [quiz, setQuiz] = useState({ 
    id: "",
    title: "", 
    description: "", 
    questions: [], 
    creator: username ? username : "" 
  });

  const saveQuiz = () => {
    const response = save({
          variables: {
            createQuizInput: {
              ...quiz
            }
          }
        }).then(response => {
          setQuiz(response.data.createQuiz);
        }).catch( err => {
          console.log(err);
        });
  };

  useEffect( () => {
    saveQuiz();
  }, []);

  if ( loading || !data ) {
    return <Spinner />;
  }

  return (
    <Container>
      {/* <Quiz quiz={newQuiz} /> */}
      {quiz.id !== "" && <Quiz quiz={{id: quiz.id, title: quiz.title, description: quiz.description, questions: quiz.questions, creator: quiz.creator}}/>}
    </Container>
  );
};

export default CreateQuiz;
