import { useQuery } from "@apollo/client";
import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { withUserName } from "../selectors/account";
import { QuizInput } from "utils/types";
import { FECTH_BY_CREATOR } from "../services/queries/Quiz";
import Quiz from "../views/quiz/Index";
import Spinner from "../components/Spinner";
import { canEditAtom } from "../atoms/quiz";
import PrimaryButton from "../components/PrimaryButton";
import { GREEN } from "../app/theme";

/**
 * Component to render all available quizzes. We can make use of this when 
 * we want to display different quizzes users can take. 
 * @returns 
 */
const Quizzes: React.FC = () => {
  const [edit, setEdit] = useRecoilState(canEditAtom);
  const username = useRecoilValue(withUserName);
  // Fetch data 
  const { loading, error, data } = useQuery(FECTH_BY_CREATOR,
    {variables: { findQuizByCreatorCreator: username}});
    
    if (loading || !data) {
        return <Spinner />;
      }
    return (
        <Container>
        {data.findAllQuiz.map( ({title, questions, creator}: QuizInput) => {
            // return <Quiz quiz={{title: title, questions: questions, creator: creator}} />
        })}
        </Container>
    )
}

export default Quizzes;