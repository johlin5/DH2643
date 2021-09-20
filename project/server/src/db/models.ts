import mongoose from "mongoose";

const requiredStringType = {
  type: String,
  required: true
};

const optStringType = {
  type: String
};

const userSchema = new mongoose.Schema({
  firstName: optStringType,
  lastName: optStringType,
  userName: requiredStringType,
  password: requiredStringType,
  image: optStringType,
  biography: optStringType
});

/* Answer schema */
const answerSchema = new mongoose.Schema({
  description: requiredStringType, 
  flag: Boolean
});

/* Question schema */
const questionSchema = new mongoose.Schema({
  question: requiredStringType,
  answers: [answerSchema],
  owner: userSchema, 
  upvotes: Number, 
  reports: [optStringType]
});

/*
export const history = new Mongoose.Schema({

});
*/
export const Users = mongoose.model("Users", userSchema);
export const Questions = mongoose.model("Questions", questionSchema);
export const Answers = mongoose.model("Answers", answerSchema);