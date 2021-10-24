import { Users, UserDoc } from "../db/models/users";
import { Questions } from "../db/models/questions";
import { Quizzes } from "../db/models/quizzes";
import { History, HistoryDoc } from "../db/models/history";
import { UserInput } from "../utils/types";

/** User */
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

/** Question */
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

/** Quiz */
export const createQuiz = async (input) => {
  const newQuiz = new Quizzes({
    title: input.title,
    description: input.description,
    questions: input.questions,
    creator: input.creator
  });
  newQuiz.id = newQuiz._id;
  await newQuiz.save();
  return newQuiz;
};

/** History */
export const createHistory = async (input, userId): Promise<HistoryDoc> => {
  const newHistory = new History({
    quizTitle: input.quizTitle,
    score: input.score,
    maxScore: input.maxScore,
    userId: userId,
    date: new Date().toLocaleDateString()
  });
  newHistory.id = newHistory._id;
  await newHistory.save();
  return newHistory;
};
