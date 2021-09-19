import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answers: {
        type: [String],
        required: true
    },
    correctanswer: {
        type: String,
        required: true
    }
});

export const Questions = mongoose.model("Questions", questionSchema);