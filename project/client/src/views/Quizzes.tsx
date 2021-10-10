import { useQuery } from "@apollo/client";
import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { QuizInput } from "utils/types";
import { FETCH_ALL_QUIZES } from "../services/queries/Quiz";
import Quiz from "../views/quiz/Index";

/**
 * Component to render all available quizzes. We can make use of this when 
 * we want to display different quizzes users can take. 
 * @returns 
 */
const Quizzes: React.FC = () => {
    const { data, loading, error } = useQuery(FETCH_ALL_QUIZES);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :({error}</p>;
    console.log(data);
    return (
        <Container>
        {data.findAllQuiz.map( ({title, questions, creator}: QuizInput) => {
            return <Quiz quiz={{title: title, questions: questions, creator: creator}} editState={false} />
        })}
        </Container>
    )
}

export default Quizzes;