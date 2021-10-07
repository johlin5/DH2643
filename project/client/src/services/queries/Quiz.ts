import { gql } from "@apollo/client";

export const SAVE_QUIZ = gql`
  mutation CreateQuizMutation($createQuizInput: QuizInput) {
    createQuiz(input: $createQuizInput) {
      title
      id
      questions {
        question
        answers {
          description
          flag
        }
      }
      creator
    }
  }
`;
