import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    userName: String!
    password: String!
    passwordConfirmation: String
    biography: String
  }

  type UserAuthPayload {
    id: ID!
    firstName: String
    lastName: String
    userName: String!
    biography: String
  }

  input UserUpdate {
    firstName: String
    lastName: String
    biography: String
  }

  input UserInput {
    firstName: String
    lastName: String
    userName: String!
    password: String!
    passwordConfirmation: String!
    biography: String
  }

  input LoginInput {
    userName: String!
    password: String!
  }

  type AuthPayload {
    token: String
    user: UserAuthPayload
  }

  extend type Query {
    findUserById: UserAuthPayload!
    findUserByUserName(userName: String!): UserAuthPayload!
  }

  extend type Mutation {
    signup(input: UserInput!): AuthPayload!
    login(input: LoginInput!): AuthPayload!
    updateUser(input: UserUpdate): UserAuthPayload!
  }
`;

export default typeDefs;
