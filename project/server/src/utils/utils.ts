import { configure, getLogger } from "log4js";
import * as errorMsg from "./errorMessages";
import jwt from "jsonwebtoken";
import { Users } from "../db/models/users";
import { Questions } from "../db/models/questions";
import { Quizzes } from "../db/models/quizzes";

const loggerConfig = {
  appenders: {
    out: { type: "stdout", layout: { type: "colored" } }
  },
  categories: {
    default: { appenders: ["out"], level: "trace" }
  }
};
configure(loggerConfig);

export const log = getLogger();

export const isNull = (field: unknown): boolean => field === null;

const validPasswordFormat = (password: string): boolean => {
  const regex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
  return true;
};

const validConfirmation = (string1: string, string2: string): boolean => {
  return String(string1).localeCompare(String(string2)) === 0;
};

export const validatePassword = (password: string, passwordConfirmation: string): void => {
  if (!validPasswordFormat(password)) {
    throwMsg(errorMsg.invalidPasswordFormat);
  }
  if (!validConfirmation(password, passwordConfirmation)) {
    throwMsg(errorMsg.invalidPasswordConfirmation);
  }
};

export const throwMsg = (msg: string): Error => {
  throw new Error(msg);
};

export const isAuth = (request: any) => {
  const authHeader = request.req.headers.authorization;
  if (!authHeader) {
    return { isAuth: false };
  }
  const token = authHeader.replace("Bearer ", "");
  if (!token) {
    // No token found
    return { isAuth: false };
  }
  let decodeToken: any = null;
  try {
    decodeToken = jwt.verify(token, process.env.SECRET);
  } catch (err) {
    // Not authenticated
    return { isAuth: false };
  }
  if (!decodeToken) {
    // Random error
    return { isAuth: false };
  }
  return { isAuth: true, userId: decodeToken.userId };
};

export const createNewUser = async ({ firstName, lastName, userName, image, biography }, hashed) => {
  const user = new Users({
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    password: hashed,
    image: image,
    biography: biography
  });
  user.id = user._id;
  await user.save();
  return user;
};

export const createNewQuestion = async (input) => {
  const newQuestion = new Questions({
    question: input.question,
    userId: input.userId,
    answers: input.answers,
    upvotes: input.upvotes,
    report: input.report
  });
  newQuestion.id = newQuestion._id;
  await newQuestion.save();
  return newQuestion;
};

export const createQuiz = async (input) => {
  const newQuiz = new Quizzes({
    title: input.name, 
    questions: input.questions,
    creator: input.creator
  }); 
  newQuiz.id = newQuiz._id; 
  await newQuiz.save(); 
  return newQuiz; 
};
