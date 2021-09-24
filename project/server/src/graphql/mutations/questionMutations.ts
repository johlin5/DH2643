import { Questions } from "../../db/models/questions";
import jwt from "jsonwebtoken";
import * as type from "../../utils/types";
import { createNewQuestion, throwMsg } from "../../utils/utils";


export default {
    createQuestion: (_parent: unknown, {input}: type.QuestionInput, {isAuth, userId}): Promise<unknown> => {
        // Add some authentication here 
        return new Promise(async (resolve, _) => {
                const question = await createNewQuestion(input);
                if (!question) {
                    throwMsg("Weirdo, could not create question"); // Change this to something more nice 
                } else resolve(question);
        });
    },
    // deleteQuestion: (_parent: unknown, {id}: type.Id): Promise<unknown> => {
    //     return new Promise((resolve, reject) => {
    //         // Handle the query 
    //         Questions.findOneAndDelete(id, (err, questions) => {
    //             if (err) reject(err);
    //             else resolve(questions)
    //         })
    //     })
    // },
    updateQuestion: (_parent: unknown, {input}: type.QuestionInput): Promise<unknown> => {
        // Add some authenication 
        return new Promise((resolve, reject) => {
            Questions.findByIdAndUpdate({input}, (err, questions) => {
                if (err) reject(err);
                else resolve(questions);
            })
        });
    }
}


// createQuestion(input: QuestionInput!): Question
// deleteQuestion(id: ID!): Question 
// updateQuestion(input: QuestionInput!): Question 
// reportQuestion(id: ID!): Question - Chill with this one 