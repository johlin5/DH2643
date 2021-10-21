import { gql } from "apollo-server-express";

const typeDefs = gql`
  type History {
    id: ID!
    quizId: String!
    score: Int!
    userId: String!
    date: String
  }

  input HistoryInput {
    quizId: String!
    score: Int!
  }

  extend type Query {
    findHistory: [History]
  }

  extend type Mutation {
    createHistory(input: HistoryInput!): History!
  }
`;

export default typeDefs;
