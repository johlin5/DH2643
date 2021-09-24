import * as type from "../../utils/types";
import { Quizzes } from "../../db/models/quizzes";

export default {
    findAllQuizzes: (_parent: unknown, context: any): Promise<unknown> => {
        return new Promise((resolve, reject) => {
            Quizzes.find((err, questions) => {
                if (err) reject(err) 
                else resolve(questions)
            });
        });
    }
}