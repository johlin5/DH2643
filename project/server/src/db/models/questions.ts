import mongoose from "mongoose";
import { requiredStringType, optStringType } from "./stringType";
import { Answers } from "./answer";

const questionSchema = new mongoose.Schema({
  question: requiredStringType,
  answers: [Answers.schema],
  userId: requiredStringType
});

export const Questions = mongoose.model("Questions", questionSchema);
