import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation LoginMutation($signupInput: UserInput!) {
    signup(input: $signupInput) {
      token
      user {
        id
        password
        userName
        passwordConfirmation
      }
    }
  }
`;
