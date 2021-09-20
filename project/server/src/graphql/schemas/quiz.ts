import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Quiz {
    id: ID!
    title: String!
    questions: [Question!]!
    creator: ID!
  }

  input QuizInput {
    name: String!
    questions: [String!]!
    creator: ID!
  }

  type Question {
    id: ID!
    question: String!
    answers: [String!]!
    correctanswer: String!
  }

  input QuestionInput {
    questions: String!
    answers: [String!]!
    correctanswer: String!
  }

  extend type Query {
    findQuizById(id: ID!): Quiz
  }

  extend type Mutation {
    createQuiz(input: QuizInput): Quiz
    createQuestion(input: QuestionInput): Question
  }
`;

export default typeDefs;
