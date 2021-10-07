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
