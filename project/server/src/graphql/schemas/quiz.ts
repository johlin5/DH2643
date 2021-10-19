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
    description: String
    questions: [Question!]!
    creator: String!
    upvotes: Int
  }

  input QuizInput {
    title: String
    description: String
    questions: [QuestionInput]
    creator: String!
    image: Upload
  }

  extend type Query {
    findQuizById(id: ID!): Quiz
    findAllQuiz: [Quiz]
    findQuizByCreator(creator: String!): [Quiz]
  }

  extend type Mutation {
    createQuiz(input: QuizInput): Quiz
    updateQuiz(id: ID!, input: QuizInput): Quiz
    deleteQuiz(id: ID!): Quiz
    upvoteQuiz(id: ID!): Quiz
  }
`;

export default typeDefs;
