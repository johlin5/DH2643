import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    userName: String!
    password: String!
    passwordConfirmation: String
    image: String
    biography: String
  }

  input UserInput {
    firstName: String
    lastName: String
    userName: String!
    password: String!
    passwordConfirmation: String!
    image: String
    biography: String
  }

  input LoginInput {
    userName: String!
    password: String!
  }

  type AuthPayload {
    token: String
    user: User
  }

  extend type Query {
    findUserById(id: ID!): User!
    findUserByUserName(userName: String!): User!
  }

  extend type Mutation {
    signup(input: UserInput!): AuthPayload!
    login(input: LoginInput!): AuthPayload!
  }
`;

export default typeDefs;
