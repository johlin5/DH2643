import * as type from "../../utils/types";
import { Users } from "../../db/models/users";

export default {
  findUserById: (_parent: unknown, { id }: type.Id, context: any): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      Users.findById(id, (err, users) => {
        if (err) reject(err);
        else resolve(users);
      });
    });
  },
  findUserByUserName: (_parent: unknown, { userName }: type.UserName, context: any): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      Users.findOne({ userName: userName }, (err, users) => {
        if (err) reject(err);
        else resolve(users);
      });
    });
  }
};
