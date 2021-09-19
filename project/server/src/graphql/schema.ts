import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String
    lastName: String
    userName: String!
    password: String
    image: String
  }

  type AuthData {
    token: String!
    tokenExpiration: Int!
  }

  type Question {
    _id: ID!
    question: String!
    answers: [String!]!
    correctanswer: String!
  }

  type Quiz {
    _id: ID!
    title: String!
    questions: [Question!]!
    creator: ID!
  }

  input UserInput {
    firstName: String
    lastName: String
    userName: String!
    password: String!
    image: String
  }

  input LogInInput {
    username: String!
    password: String!
  }

  input QuizInput {
    name: String!
    questions: [String!]!
    creator: ID!
  }

  input QuestionInput {
    questions: String!
    answers: [String!]!
    correctanswer: String!
  }

  type Query {
    findUser(id: ID!): User
    login(input: LogInInput!): AuthData
  }

  type Mutation {
    createUser(input: UserInput): User
    createQuiz(input: QuizInput): Quiz
    createQuestion(input: QuestionInput): Question
  }
`;
