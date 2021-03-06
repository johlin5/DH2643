import { gql } from "@apollo/client";

export const FIND_USER_BY_ID = gql`
  query Query {
    findUserById {
      id
      firstName
      lastName
      userName
      image
      biography
    }
  }
`;

export const FIND_USER_BY_NAME = gql`
  query Query($userName: String!) {
    findUserByUserName(userName: $userName) {
      id
      firstName
      lastName
      userName
      biography
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUserMutation($input: UserUpdate) {
    updateUser(input: $input) {
      lastName
      firstName
      id
      image
      userName
      biography
    }
  }
`;
