import UserQueries from "./queries/userQueries";
import UserMutations from "./mutations/userMutations";
import questionQueries from "./queries/questionQueries";
import questionMutations from "./mutations/questionMutations";
import quizQueries from "./queries/quizQueries";
import quizMutation from "./mutations/quizMutation";
import historyMutations from "./mutations/historyMutations";
import historyQueries from "./queries/historyQueries";

export const resolvers = {
  Query: {
    ...UserQueries,
    ...questionQueries,
    ...quizQueries,
    ...historyQueries
  },
  Mutation: {
    ...UserMutations,
    ...questionMutations,
    ...quizMutation,
    ...historyMutations
  }
};
