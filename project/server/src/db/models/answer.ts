import mongoose from "mongoose";
import { requiredStringType } from "./stringType";

/* Answer schema */
const answerSchema = new mongoose.Schema({
    description: requiredStringType, 
    flag: { type: Boolean, default: false}
  });

export const Answers = mongoose.model("Answers", answerSchema);