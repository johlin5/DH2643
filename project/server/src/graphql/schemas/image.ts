import { gql } from "apollo-server-express";

const typeDefs = gql`
    scalar Upload
    
    type File {
        filename: String!
        mimetype: String!
        encoding: String!
    }

    extend type Query {
        findImageByID(id: ID!): Upload!
    }

    extend type Mutation {
        uploadImage(file: Upload!): File!
    }
`;

export default typeDefs;
