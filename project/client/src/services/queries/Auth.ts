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

export const LOGIN = gql`
  mutation TokenMutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      token
      user {
        userName
        password
        id
      }
    }
  }
`;
