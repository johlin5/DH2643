import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typedefs";
import { resolvers } from "./resolvers";
import express from "express";
import { isAuth } from "./validations/authentication";

export const startApolloServer = async (app: express.Application): Promise<void> => {
  const server = new ApolloServer({ typeDefs, resolvers, context: isAuth });
  await server.start();
  server.applyMiddleware({ app });
};
