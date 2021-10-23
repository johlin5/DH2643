import { QuizDoc } from "../../db/models/quizzes";
import { QuizInput, ContextAuth } from "../../utils/types";
import { validateContext } from "../../validations/validators";
import { createQuiz } from "../../persistence/creators";
import { deleteQuiz } from "../../persistence/deletions";
import { updateQuiz, upvoteQuiz } from "../../persistence/updates";

export default {
  createQuiz: async (_parent: unknown, { input }: QuizInput, context: ContextAuth): Promise<QuizDoc> => {
    validateContext(context);
    const quiz = await createQuiz(input);
    return quiz;
  },
  updateQuiz: async (_parent: unknown, { id, input }, context: ContextAuth): Promise<QuizDoc> => {
    validateContext(context);
    const updatedQuiz = await updateQuiz(id, input);
    return updatedQuiz;
  },
  deleteQuiz: async (_parent: unknown, { id }, context: any): Promise<unknown> => {
    const userId = validateContext(context);
    const deleted = await deleteQuiz(id, userId);
    return deleted;
  },
  upvoteQuiz: async (_parent: unknown, { id }, context: ContextAuth): Promise<QuizDoc> => {
    validateContext(context);
    const updated = await upvoteQuiz(id);
    return updated;
  }
};
