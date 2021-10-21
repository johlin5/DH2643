import { createHistory } from "../../db/persistence/creators";
import { validateContext } from "../../validations/validators";
import { HistoryDoc } from "../../db/models/history";

export default {
  createHistory: async (_parent: unknown, { input }, context: any): Promise<HistoryDoc> => {
    const userId = validateContext(context);
    const history = await createHistory(input, userId);
    return history;
  }
};
