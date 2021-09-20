import * as type from "../../utils/types";
import { Users } from "../../db/models/users";

export default {
  findUserById: (_parent: unknown, { id }: type.Id): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      Users.findById(id, (err, users) => {
        if (err) reject(err);
        else resolve(users);
      });
    });
  },
  findUserByUserName: (_parent: unknown, { userName }: type.UserName): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      Users.findOne({ userName: userName }, (err, users) => {
        if (err) reject(err);
        else resolve(users);
      });
    });
  }
  /*login: async (root: any, { input }) => {
      const user = await Users.findOne({ userName: input.userName });
      if (!user) {
        errorMsg(errorMessages.userDoesNotExist);
      }
      bcrypt.compare(input.password, user.password, (err, isValid) => {
        if (err || !isValid) {
        }
      });
    }*/
};
