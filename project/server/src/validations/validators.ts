import * as errorMsg from "../utils/errorMessages";
import { isNull, debug } from "../utils/utils";
import * as type from "../utils/types";
import { compare } from "bcrypt";
import { Users, UserDoc } from "../db/models/users";
import { Quizzes, QuizDoc } from "../db/models/quizzes";
import { Types } from "mongoose";

const debugValidators = debug.extend("validators");
/**
 * ERROR ENGINE XD
 */

export const throwMsg = (msg: string): Error => {
  throw new Error(msg);
};

/**
 * PASSWORDS
 */

const validatePasswordFormat = (password: string): boolean => {
  const regex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
  return regex.test(password);
};

const validateConfirmation = (string1: string, string2: string): boolean => {
  return String(string1).localeCompare(String(string2)) === 0;
};

export const validatePassword = (password: string, passwordConfirmation: string): void => {
  if (!validatePasswordFormat(password)) {
    throwMsg(errorMsg.invalidPasswordFormat);
  }
  if (!validateConfirmation(password, passwordConfirmation)) {
    throwMsg(errorMsg.invalidPasswordConfirmation);
  }
};

export const verifyPassword = async (inputPassword: string, hash: string): Promise<boolean> => {
  const valid = await compare(inputPassword, hash);
  if (!valid) {
    throwMsg(errorMsg.wrongCredentidals);
  }
  return true;
};

/**
 * CONTEXT
 */

export const validateContext = ({ isAuth, userId }: type.ContextAuth): string => {
  debugValidators("Context userId: %s isAuth: %s", userId, isAuth);
  if (isAuth && !isNull(userId)) {
    return userId;
  }
  throwMsg(errorMsg.notAuthenticated);
};

export const validateObjectID = (id: string): void => {
  const isValid = Types.ObjectId.isValid(id);
  debugValidators("Validate ObjectID: %s", isValid);
  if (!isValid) {
    throwMsg(errorMsg.invalidObjectID);
  }
};

/**
 * USERS
 */

export const validateUniqueUser = async ({ userName }: type.UserName): Promise<void> => {
  const expectedUser = await Users.findOne({ userName: userName });
  if (expectedUser) {
    throwMsg(errorMsg.userAlreadyExists);
  }
  return;
};

export const validateExistingUser = async (userName: string): Promise<UserDoc> => {
  const user = await Users.findOne({ userName: userName });
  debugValidators("EXISTINGUSER: %o", user);
  if (!user) {
    throwMsg(errorMsg.userDoesNotExist);
  }
  return user;
};

/**
 * QUIZ
 */
export const validateQuiz = async (quizId: string, userId: string): Promise<QuizDoc> => {
  const quiz = await Quizzes.findById(quizId);
  debugValidators("QUIZVALIDATIONS: %o", quiz);
  if (!quiz) {
    throwMsg(errorMsg.quizNotFound);
  }
  if (quiz.creator !== userId) {
    throwMsg(errorMsg.quizDeleteNotAllowed);
  }
  return quiz;
};
