import mongoose from "mongoose";
import {Users} from "./models/users";

const requiredStringType = {
  type: String,
  required: true
};

const optStringType = {
  type: String
};

/* Answer schema */
const answerSchema = new mongoose.Schema({
  description: requiredStringType, 
  flag: Boolean
});

/* Question schema */
const questionSchema = new mongoose.Schema({
  question: requiredStringType,
  answers: [answerSchema],
  owner: Users.schema, 
  upvotes: Number, 
  reports: [optStringType]
});

/*
export const history = new Mongoose.Schema({

});
*/
export const Questions = mongoose.model("Questions", questionSchema);
export const Answers = mongoose.model("Answers", answerSchema);