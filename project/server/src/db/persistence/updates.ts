import { Users } from "../models/users";
/**
 * DB updates
 */

export const updateUser = async (userId, updateInput) => {
  const filter = { _id: userId };
  const update = Object.entries(updateInput).reduce((a, [k, v]) => {
    if (v !== undefined) {
      a[k] = v;
    }
    return a;
  }, {});
  const document = await Users.findOneAndUpdate(filter, update, {
    returnOriginal: false
  });
  return document;
};
