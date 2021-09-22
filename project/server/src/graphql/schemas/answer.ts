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
`;

export default typeDefs