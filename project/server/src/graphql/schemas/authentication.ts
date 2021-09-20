import { gql } from "apollo-server-express";

const typeDefs = gql`
  type AuthData {
    token: String!
    tokenExpiration: Int!
  }
  input LogInInput {
    username: String!
    password: String!
  }

  extend type Query {
    login(input: LogInInput!): AuthData
  }
`;

export default typeDefs;
