import { Quizzes } from "../../db/models/quizzes";
import { QuizInput } from "../../utils/types";
import { throwMsg } from "../validations/validators";
import { createQuiz } from "../../db/persistence/creators";
import { quizNotFound, unableQuizCreation } from "../../utils/errorMessages";
import { validateContext, deleteQuiz } from "../validations/validators";

export default {
  createQuiz: (_parent: unknown, { input }: QuizInput, context: any): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      // Add authentication
      const quiz = createQuiz(input);
      if (!quiz) {
        throwMsg(unableQuizCreation);
      } else {
        resolve(quiz);
      }
    });
  },
  updateQuiz: (_parent: unknown, { id, input }, context: any): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      // Add authentication
      const updatedQuiz = Quizzes.findByIdAndUpdate(
        { _id: id },
        {
          title: input.title,
          description: input.description,
          questions: input.questions
        },
        {new: true}, 
        (error, result) => {
          if(error) { 
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  deleteQuiz: async (_parent: unknown, { id }, context: any): Promise<unknown> => {
    const userId = validateContext(context);
    // Måste verifiera att quizet tillhör användaren och osäker på vad deletequiz returnerar
    const deleted = await deleteQuiz(id);
    return deleted;
  },
  upvoteQuiz: async (_parent: unknown, { id }, context: any): Promise<unknown> => {
    return new Promise( (resolve, reject) => {
      const upvotedQuiz = Quizzes.findByIdAndUpdate(id, {$inc: {
        upvotes: 1
      }}, {new: true}); // Increment upvotes and return the new object 
      if (!upvotedQuiz) {
        reject(throwMsg(quizNotFound));
      } else {
        resolve(upvotedQuiz);
      }
    });
  }
};
