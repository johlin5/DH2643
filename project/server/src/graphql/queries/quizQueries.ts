import { Quizzes } from "../../db/models/quizzes";
import { validateContext, validateObjectID } from "../validations/validators";

export default {
  findAllQuiz: async (_parent: unknown, _args: unknown, context: any): Promise<unknown> => {
    validateContext(context);
    const quizzes = await Quizzes.find();
    return quizzes;
  },
  findQuizById: async (_parent: unknown, { id }, context: any): Promise<unknown> => {
    validateContext(context);
    validateObjectID(id);
    const quiz = await Quizzes.findById(id);
    return quiz;
  },
  findQuizByCreator: async(_parent: unknown, { creator }, context: any): Promise<unknown> => {
    validateContext(context);
    const quiz = await Quizzes.find({creator});
    return quiz
  }
};
