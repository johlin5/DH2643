import { History, HistoryDoc } from "../../db/models/history";
import { validateContext } from "../../validations/validators";
import { ContextAuth } from "../../utils/types";

export default {
  findHistory: async (_parent: unknown, _args: unknown, context: ContextAuth): Promise<HistoryDoc[]> => {
    const userId = validateContext(context);
    const history = await History.find({ userId });
    return history;
  }
};
