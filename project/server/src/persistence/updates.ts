import { Users, UserDoc } from "../db/models/users";
import { Quizzes, QuizDoc } from "../db/models/quizzes";
import { genericMongooseValidationCb } from "../validations/validators";
import { updateFailed } from "../utils/errorMessages";

const filterUpdateInput = (updateInput: any) => {
  const update = Object.entries(updateInput).reduce((a, [k, v]) => {
    if (v !== undefined) {
      a[k] = v;
    }
    return a;
  }, {});
  return update;
};

/** USERS */
export const updateUser = async (userId: string, updateInput): Promise<UserDoc> => {
  const filter = { _id: userId };
  const update = filterUpdateInput(updateInput);
  const document = await Users.findOneAndUpdate(
    filter,
    update,
    {
      returnOriginal: false
    },
    (err, user) => genericMongooseValidationCb(err, user, updateFailed)
  );
  return document;
};

/** QUIZ */
export const updateQuiz = async (id: string, input): Promise<QuizDoc> => {
  const filter = { _id: id };
  const update = filterUpdateInput(input);
  const document = await Quizzes.findByIdAndUpdate(filter, update, { new: true }, (err, quiz) =>
    genericMongooseValidationCb(err, quiz, updateFailed)
  );
  return document;
};

export const upvoteQuiz = async (id: string): Promise<QuizDoc> => {
  const filter = { _id: id };
  const update = { $inc: { upvotes: 1 } };
  const document = await Quizzes.findByIdAndUpdate(filter, update, { new: true }, (err, quiz) =>
    genericMongooseValidationCb(err, quiz, updateFailed)
  );
  return document;
};
