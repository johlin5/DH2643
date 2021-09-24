import UserQueries from "./queries/userQueries";
import UserMutations from "./mutations/userMutations";
import questionQueries from "./queries/questionQueries";
import questionMutations from "./mutations/questionMutations";

export const resolvers = {
  Query: {
    ...UserQueries, 
    ...questionQueries
  },
  Mutation: {
    ...UserMutations,
    ...questionMutations
  }
};
