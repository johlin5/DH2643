import mongoose, { Schema } from "mongoose";
import { Questions } from "./questions";

const quizzesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  questions: {
    type: [
      {
        type: Questions.schema,
        ref: "Question"
      }
    ],
    required: true
  },
  creator: {
    type: String,
    ref: "User"
  },
  upvotes: { type: Number, default: 0 }
});

export const Quizzes = mongoose.model("Quizzes", quizzesSchema);
