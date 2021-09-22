import { gql } from "apollo-server-express";

const typeDefs = gql`type Query {
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
`;

export default typeDefs