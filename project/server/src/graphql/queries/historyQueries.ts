import { History, HistoryDoc } from "../../db/models/history";
import { validateContext } from "../../validations/validators";

export default {
  findHistory: async (_parent: unknown, _args: unknown, context: any): Promise<unknown> => {
    const userId = validateContext(context);
    const history = await History.find({ userId });
    return history;
  }
};
