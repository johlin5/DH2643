import * as type from "../../utils/types";
import { Users } from "../../db/models/users";
import { validateContext } from "../validations/validators";

export default {
  findUserById: async (_parent: unknown, _args: unknown, context: any): Promise<unknown> => {
    const userId = validateContext(context);
    const user = await Users.findById(userId);
    return user;
  },
  findUserByUserName: async (_parent: unknown, { userName }: type.UserName, context: any): Promise<unknown> => {
    validateContext(context);
    const user = await Users.findOne({ userName: userName });
    return user;
  }
};
