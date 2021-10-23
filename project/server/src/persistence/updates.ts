import { Users, UserDoc } from "../db/models/users";
import { Quizzes, QuizDoc } from "../db/models/quizzes";
import { throwMsg } from "../validations/validators";
import { updateFailed } from "../utils/errorMessages";
import { debug } from "../utils/utils";

const debugUpdates = debug.extend("updates");

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
  try {
    return await Users.findOneAndUpdate(filter, update, {
      returnOriginal: false
    });
  } catch (error) {
    throwMsg(updateFailed);
    debugUpdates(error);
  }
};

/** QUIZ */
export const updateQuiz = async (id: string, input): Promise<QuizDoc> => {
  const filter = { _id: id };
  const update = filterUpdateInput(input);
  try {
    return await Quizzes.findByIdAndUpdate(filter, update, { new: true });
  } catch (error) {
    throwMsg(updateFailed);
  }
};

export const upvoteQuiz = async (id: string): Promise<QuizDoc> => {
  const filter = { _id: id };
  const update = { $inc: { upvotes: 1 } };
  try {
    return await Quizzes.findByIdAndUpdate(filter, update, { new: true });
  } catch (error) {
    throwMsg(updateFailed);
  }
};
