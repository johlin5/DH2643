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
  findQuestionByUser: (_parent: unknown, {input}: type.UserInput, context: any): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      Questions.find(input, (err, questions) => { // Filter by ID 
        if (err) reject(err);
        else resolve(questions);
      });
    });
  },
  findAllQuestions: (_parent: unknown, context: any): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      Questions.find({}, (err, questions) => {
        if (err) reject(err);
        else resolve(questions);
      });
    });
  }
};
