import { Users, UserDoc } from "../models/users";
import { Questions } from "../models/questions";
import { Quizzes } from "../models/quizzes";
import { UserInput } from "../../utils/types";

export const createNewUser = async (
  { firstName, lastName, userName, image, biography }: UserInput["input"],
  hashed: string
): Promise<UserDoc> => {
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
    title: input.title,
    questions: input.questions,
    creator: input.creator
  });
  newQuiz.id = newQuiz._id;
  await newQuiz.save();
  return newQuiz;
};
