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
      description
      questions {
        id
        question
        answers {
          id
          description
          flag
        }
      }
      creator
    }
  }
`;

export const FECTH_BY_CREATOR = gql`
  query Query($findQuizByCreatorCreator: String!) {
    findQuizByCreator(creator: $findQuizByCreatorCreator) {
      title
      questions {
        question
        answers {
          description
        }
      }
      creator
    }
  }
`;
export const FETCH_QUIZ_BY_ID = gql`
  query Query($findQuizByIdId: ID!) {
    findQuizById(id: $findQuizByIdId) {
      title
      id
      image
      questions {
        id
        question
        answers {
          id
          description
          flag
        }
      }
      creator
      upvotes
    }
  }
`;
