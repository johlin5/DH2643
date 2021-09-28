import * as type from "../../utils/types";
import { Quizzes } from "../../db/models/quizzes";
import { throwMsg } from "../../utils/utils";
import { quizNotFound } from "../../utils/errorMessages";

export default {
  findAllQuiz: (_parent: unknown, context: any): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      Quizzes.find((err, questions) => {
        if (err) reject(err);
        else resolve(questions);
      });
    });
  },
  findQuizById: (_parent: unknown, { id }, context: any): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      const quiz = Quizzes.findById(id);
      if (!quiz) {
        reject(throwMsg(quizNotFound));
      } else {
        resolve(quiz);
      }
    });
  }
};
