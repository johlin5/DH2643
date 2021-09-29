import * as type from "../../utils/types";
import { Users } from "../../db/models/users";
import { validateContext } from "../validations/validators";

export default {
  findUserById: (_parent: unknown, _args: unknown, context: any): Promise<unknown> => {
    const userId = validateContext(context);
    return new Promise((resolve, reject) => {
      Users.findById(userId, (err, users) => {
        if (err) reject(err);
        else resolve(users);
      });
    });
  },
  findUserByUserName: (_parent: unknown, { userName }: type.UserName, context: any): Promise<unknown> => {
    validateContext(context);
    return new Promise((resolve, reject) => {
      Users.findOne({ userName: userName }, (err, users) => {
        if (err) reject(err);
        else resolve(users);
      });
    });
  }
};
