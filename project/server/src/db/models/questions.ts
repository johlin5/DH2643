import mongoose from "mongoose";
import { requiredStringType } from "./stringType";
import { Answers, AnswerDoc } from "./answer";

export interface QuestionDoc extends Document {
  question: string;
  answers: AnswerDoc;
  userId: string;
}

const questionSchema = new mongoose.Schema({
  question: requiredStringType,
  answers: [Answers.schema],
  userId: requiredStringType
});

export const Questions = mongoose.model<QuestionDoc>("Questions", questionSchema);
