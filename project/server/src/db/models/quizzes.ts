import mongoose, { Schema } from "mongoose";

const quizzesSchema = new mongoose.Schema({
    title: {
        type: String!,
        required: true
    },
    questions: {
        type: 
        [{
            type: Schema.Types.ObjectId,
            ref: 'Question'
        }],
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

export const Quizzes = mongoose.model("Quizzes", quizzesSchema);