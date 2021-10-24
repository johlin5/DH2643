import { gql } from "apollo-server-express";

const typeDefs = gql`
  type History {
    id: ID!
    quizTitle: String!
    score: Int!
    maxScore: Int!
    userId: String!
    date: String
  }

  input HistoryInput {
    quizTitle: String!
    score: Int!
    maxScore: Int!
  }

  extend type Query {
    findHistory: [History]
  }

  extend type Mutation {
    createHistory(input: HistoryInput!): History!
  }
`;

export default typeDefs;
