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

export const FETCH_ALL_QUIZES = gql`
  query Query {
    findAllQuiz {
      id
      title
    }
  }
`;
