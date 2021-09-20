import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typedefs";
import { resolvers } from "./resolvers";

export const startServer = async (app): Promise<void> => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
};
