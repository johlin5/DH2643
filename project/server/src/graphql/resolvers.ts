import UserQueries from "./queries/userQueries";
import UserMutations from "./mutations/userMutations";

export const resolvers = {
  Query: {
    ...UserQueries
  },
  Mutation: {
    ...UserMutations
  }
};
