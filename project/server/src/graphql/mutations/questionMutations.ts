import { Questions } from "../../db/models/questions";
import jwt from "jsonwebtoken";
import * as type from "../../utils/types";
import { throwMsg } from "../validations/validators";
import { createNewQuestion } from "../../db/persistence/creators";

export default {
  createQuestion: (_parent: unknown, { input }: type.QuestionInput, { isAuth, userId }): Promise<unknown> => {
    // Add some authentication here
    return new Promise(async (resolve, _) => {
      const question = await createNewQuestion(input);
      if (!question) {
        throwMsg("Weirdo, could not create question"); // Change this to something more nice
      } else resolve(question);
    });
  },
  deleteQuestion: (_parent: unknown, { id }: type.Id): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      // Add authentication
      const questions = Questions.findByIdAndDelete(id);
      resolve(questions);
    });
  },
  updateQuestion: (_parent: unknown, { id, input }): Promise<unknown> => {
    // Add some authenication
    return new Promise((resolve, reject) => {
      Questions.findByIdAndUpdate(
        { _id: id },
        {
          question: input.question,
          answers: input.answers,
          upvotes: input.upvotes
        },
        (err, question) => {
          if (err) reject(err);
          else resolve(question);
        }
      );
    });
  }
};

// createQuestion(input: QuestionInput!): Question
// deleteQuestion(id: ID!): Question
// updateQuestion(input: QuestionInput!): Question
// reportQuestion(id: ID!): Question - Chill with this one
