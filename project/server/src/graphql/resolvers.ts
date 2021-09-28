import UserQueries from "./queries/userQueries";
import UserMutations from "./mutations/userMutations";
import questionQueries from "./queries/questionQueries";
import questionMutations from "./mutations/questionMutations";
import quizQueries from "./queries/quizQueries";
import quizMutation from "./mutations/quizMutation";

export const resolvers = {
  Query: {
    ...UserQueries,
    ...questionQueries,
    ...quizQueries
  },
  Mutation: {
    ...UserMutations,
    ...questionMutations,
    ...quizMutation
  }
};
