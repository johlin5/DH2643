import { useQuery } from "@apollo/client";
import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { QuizInput } from "utils/types";
import { getAllQuizzes } from "../services/queries/Quiz";
import Quiz from "../views/quiz/Index";

/**
 * Component to render all available quizzes. We can make use of this when 
 * we want to display different quizzes users can take. 
 * @returns 
 */
const Quizzes: React.FC = () => {
    const { data, loading, error } = useQuery(getAllQuizzes);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const allData = [...data.findAllQuiz, {
        "title": "Hello",
        "questions": [
            {
                "question": "What is my name?",
                "answers": [
                    {
                        "id": "0987",
                        "description": "David",
                        "flag": "true"
                    }
                ],
                "id": "1234",
                "report": "", 
                "userId": "",
                "upvotes": 0
            }
        ],
        "creator": ""
      }];
    return (
        <Container>
        {allData.map( ({title, questions, creator}: QuizInput) => {
            return <Quiz quiz={{title: title, questions: questions, creator: creator}} editState={false} />
        })}
        </Container>
    )
}

export default Quizzes;