import { gql } from "@apollo/client";

export const FIND_HISTORY = gql`
  query Query {
    findHistory {
      id
      quizTitle
      userId
      score
      maxScore
      date
    }
  }
`;

export const CREATE_HISTORY = gql`
  mutation CreateHistoryMutation($input: HistoryInput!) {
    createHistory(input: $input) {
      id
      quizTitle
      score
      userId
      maxScore
      date
    }
  }
`;
