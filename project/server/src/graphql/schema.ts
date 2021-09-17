import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    userName: String!
    password: String!
    image: String
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  input UserInput {
    id: ID
    firstName: String
    lastName: String
    userName: String
    password: String
    image: String
  }

  type Query {
    findUser(id: ID): User
    login(username: String!, password: String!): AuthData!
  }

  type Mutation {
    createUser(input: UserInput): User
  }
`;
