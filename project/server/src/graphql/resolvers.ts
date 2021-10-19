import UserQueries from "./queries/userQueries";
import UserMutations from "./mutations/userMutations";
import questionQueries from "./queries/questionQueries";
import questionMutations from "./mutations/questionMutations";
import quizQueries from "./queries/quizQueries";
import quizMutation from "./mutations/quizMutation";
import fileQueries from "./queries/fileQueries";
import fileMutations from "./mutations/fileMutations";
import { GraphQLUpload } from "graphql-upload";

export const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    ...UserQueries,
    ...questionQueries,
    ...quizQueries,
    ...fileQueries
  },
  Mutation: {
    ...UserMutations,
    ...questionMutations,
    ...quizMutation,
    ...fileMutations
  }
};
