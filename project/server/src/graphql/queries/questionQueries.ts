import * as type from "../../utils/types";
import { Questions } from "../../db/models/questions";

export default {
  findQuestionById: (_parent: unknown, { id }: type.Id, context: any): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      Questions.findById(id, (err, questions) => {
        if (err) reject(err);
        else resolve(questions);
      });
    });
  },
  findAllQuestions: (root) => {
    return new Promise((resolve, reject) => {
        Questions.find((err, questions) => {
            if (err) reject(err)
            else resolve(questions)
        })
    })
  }
};
