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
    getAllUsers: [User]
    findUser(id: ID): User
    login(username: String!, password: String!): AuthData!
  }

  type Mutation {
    createUser(input: UserInput): User
  }

  type Question {
    id: ID!
    question: String!
    owner: User!
    answers: [Answer]
    upvotes: Int
    reports: [String]
  }

  input QuestionInput {
    question: String
    owner: UserInput
    answers: [AnswerInput]
    upvotes: Int
    report: String
  }

  type Query {
    getAllQuestions: [Question]
  }

  type Mutation {
    createQuestion(input: QuestionInput!): Question 
    deleteQuestion(id: ID): Question 
    updateQuestion(input: QuestionInput!, id: ID): Question 
  }

  type Answer {
    id: ID!
    description: String!
    flag: Boolean
  }

  input AnswerInput {
    description: String 
    flag: Boolean
  }
`;
