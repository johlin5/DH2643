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
      description
      creator
      id
    }
  }
`;

export const UPDATE_QUIZ = gql`
  mutation UpdateQuizMutation($id: ID!, $updateQuizInput: QuizInput) {
    updateQuiz(id: $id, input: $updateQuizInput) {
      title
      questions {
        id
        question
        answers {
          id
          description
          flag
        }
        
      }
      id
      description
      creator
    }
  }
`;

export const FETCH_ALL_QUIZES = gql`
  query Query {
    findAllQuiz {
      id
      title
      upvotes
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
      id
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

export const UPVOTE_QUIZ = gql`
  mutation UpvoteQuizMutation($id: ID!) {
    upvoteQuiz(id: $id) {
      title
      upvotes
    }
  }
`;
