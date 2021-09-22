import UserQueries from "./queries/userQueries";
import UserMutations from "./mutations/userMutations";
import questionQueries from "./queries/questionQueries";

export const resolvers = {
  Query: {
    ...UserQueries, questionQueries
  },
  Mutation: {
    ...UserMutations
  }
};
