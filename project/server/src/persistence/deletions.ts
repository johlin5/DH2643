import { validateQuiz } from "../validations/validators";
import { Quizzes, QuizDoc } from "../db/models/quizzes";
import { debug } from "../utils/utils";

const debugDeletions = debug.extend("deletions");

export const deleteQuiz = async (quizId: string, userId: string): Promise<QuizDoc> => {
  await validateQuiz(quizId, userId);
  const deletedQuiz = await Quizzes.findByIdAndDelete(quizId);
  debugDeletions("DELETEDQUIZ: %o", deletedQuiz);
  return deletedQuiz;
};
