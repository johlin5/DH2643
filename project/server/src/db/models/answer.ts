import mongoose from "mongoose";
import { requiredStringType } from "./stringType";

export interface AnswerDoc extends Document {
  description: string;
  flag: boolean;
}

/* Answer schema */
const answerSchema = new mongoose.Schema({
  description: requiredStringType,
  flag: { type: Boolean, default: false }
});

export const Answers = mongoose.model<AnswerDoc>("Answers", answerSchema);
