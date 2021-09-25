import mongoose, { Schema } from "mongoose";
import {Questions} from "./questions";

const quizzesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
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
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

export const Quizzes = mongoose.model("Quizzes", quizzesSchema);
