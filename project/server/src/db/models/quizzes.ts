import mongoose from "mongoose";
import { Questions, QuestionDoc } from "./questions";

export interface QuizDoc extends Document {
  id: string;
  title: string;
  image: string;
  description: string;
  questions: QuestionDoc;
  creator: string;
  upvotes: number;
}

const quizzesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  description: {
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

export const Quizzes = mongoose.model<QuizDoc>("Quizzes", quizzesSchema);
