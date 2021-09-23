import mongoose from "mongoose";
import { requiredStringType, optStringType } from "./stringType";
import { Answers } from "./answer";

// const questionSchema = new mongoose.Schema({
//   question: {
//     type: String,
//     required: true
//   },
//   answers: {
//     type: [String],
//     required: true
//   },
//   correctanswer: {
//     type: String,
//     required: true
//   }
// });

const questionSchema = new mongoose.Schema({
  question: requiredStringType,
  answers: [Answers.schema],
  owner: requiredStringType,
  upvotes: Number, 
  reports: [optStringType]
});

export const Questions = mongoose.model("Questions", questionSchema);
