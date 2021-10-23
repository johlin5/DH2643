import * as type from "../../utils/types";
import { Users, UserDoc } from "../../db/models/users";
import { validateContext } from "../../validations/validators";

export default {
  findUserById: async (_parent: unknown, _args: unknown, context: any): Promise<UserDoc> => {
    const userId = validateContext(context);
    const user = await Users.findById(userId);
    return user;
  },
  findUserByUserName: async (_parent: unknown, { userName }: type.UserName, context: any): Promise<UserDoc> => {
    validateContext(context);
    const user = await Users.findOne({ userName: userName });
    return user;
  }
};
