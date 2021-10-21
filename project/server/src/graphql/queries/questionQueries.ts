import * as type from "../../utils/types";
import { Questions } from "../../db/models/questions";
import { validateContext, validateObjectID } from "../../validations/validators";

export default {
  findQuestionById: async (_parent: unknown, { id }: type.Id, context: any): Promise<unknown> => {
    validateContext(context);
    validateObjectID(id);
    const question = await Questions.findById(id);
    return question;
  },
  findQuestionByUser: (_parent: unknown, { input }: type.UserInput, context: any): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      Questions.find(input, (err, questions) => {
        // Filter by ID
        if (err) reject(err);
        else resolve(questions);
      });
    });
  },
  findAllQuestions: async (_parent: unknown, _args: unknown, context: any): Promise<unknown> => {
    validateContext(context);
    const questions = await Questions.find();
    return questions;
  }
};
