import { Quizzes } from "../../db/models/quizzes";
import jwt from "jsonwebtoken";
import * as type from "../../utils/types";
import { createQuiz, throwMsg } from "../../utils/utils";
import { quizNotFound, unableQuizCreation } from "../../utils/errorMessages";

export default {
    createQuiz: (_parent:unknown, {input}: type.QuizInput, context:any): Promise<unknown> => {
        return new Promise(async (resolve, reject) => {
            // Add authentication
            const quiz = createQuiz(input);
            if (!quiz) {
                throwMsg(unableQuizCreation)
            } else {
                resolve(quiz);
            }
        });
    },
    updateQuiz: (_parent:unknown, {id, input}, context:any): Promise<unknown> => {
        return new Promise((resolve, reject) => {
            // Add authentication
            const updatedQuiz = Quizzes.findByIdAndUpdate({_id: id}, {
                title: input.name,
                questions: input.questions
            });
            if (!updatedQuiz) {
                reject(throwMsg(quizNotFound));
            } else {
                resolve(updatedQuiz)
            }
        });
    },
    deleteQuiz: (_parent:unknown, {id}, context: any): Promise<unknown> => {
        return new Promise((resolve, reject) => {
            // Add authentication
            const deletedQuiz = Quizzes.findByIdAndDelete(id) 
            if (!deletedQuiz) {
                reject(throwMsg(quizNotFound));
            } else {
                resolve(deletedQuiz);
            }
        });
    }
}