import { gql } from "apollo-server-express";

// input QuestionInput {
//   questions: String!
//   answers: [String!]!
//   correctanswer: String!
// }
// type Question {
//   id: ID!
//   question: String!
//   answers: [String!]!
//   correctanswer: String!
// }
// createQuestion(input: QuestionInput): Question

const typeDefs = gql`
  type Quiz {
    id: ID!
    title: String!
    questions: [Question!]!
    creator: ID!
  }

  input QuizInput {
    name: String
    questions: [QuestionInput]
    creator: ID!
  }

  extend type Query {
    findQuizById(id: ID!): Quiz
    findAllQuiz: [Quiz]
  }

  extend type Mutation {
    createQuiz(input: QuizInput): Quiz
    updateQuiz(id: ID!, input: QuizInput): Quiz 
    deleteQuiz(id:ID!): Quiz
  }
`;

export default typeDefs;
