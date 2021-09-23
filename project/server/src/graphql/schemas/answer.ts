import { gql } from "apollo-server-express";

const typeDefs = gql`
type Answer {
    id: ID!
    description: String!
    flag: Boolean
  }

  input AnswerInput {
    description: String 
    flag: Boolean
  }

  extend type Mutation {
    createAnswer(input: AnswerInput!): Answer 
    deleteAnswer(id: ID!): Answer
    updateAnswer(input: AnswerInput!): Answer
  }
`;

export default typeDefs