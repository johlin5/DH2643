import { gql } from "@apollo/client";

export const SAVE_QUIZ = gql`
mutation CreateQuizMutation($createQuizInput: QuizInput) {
  createQuiz(input: $createQuizInput) {
    title
    questions {
      question
      answers {
        description
        flag
      }
    }
    creator
    id
  }
}
`;

// Add user id and quiz id later 
export const getAllQuizzes = gql`
  query Query {
    findAllQuiz {
      title
      questions {
        question
        answers {
          description
          flag
        }
      }
    }
  }
`;