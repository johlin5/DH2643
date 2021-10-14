import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Question {
    id: ID!
    question: String!
    userID: String!
    answers: [Answer]!
  }

  input QuestionInput {
    question: String
    userId: String
    answers: [AnswerInput]
    upvotes: Int
    report: String
  }

  extend type Query {
    findQuestionByUser(input: UserInput!): [Question]
    findQuestionById(id: ID!): Question
    findAllQuestions: [Question]
  }

  extend type Mutation {
    createQuestion(input: QuestionInput!): Question
    deleteQuestion(id: ID!): Question
    updateQuestion(id: ID!, input: QuestionInput!): Question
    reportQuestion(id: ID!, report: String!): Question
  }
`;

export default typeDefs;
