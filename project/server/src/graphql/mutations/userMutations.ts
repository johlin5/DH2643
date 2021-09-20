import { Users } from "../../db/models/users";
import bcrypt from "bcrypt";
import { errorMsg } from "../../utils/utils";
import { validatePassword, checkStringEquiv } from "../../utils/utils";
import * as errorMessages from "../../utils/errorMessages";
import * as type from "../../utils/types";

const saltRounds = 10;

export default {
  createUser: async (_parent: unknown, { input }: type.UserInput): Promise<unknown> => {
    const expectedUser = await Users.findOne({ userName: input.userName });
    if (expectedUser) {
      throw errorMsg(errorMessages.userAlreadyExists);
    }
    if (!validatePassword(input.password) && !checkStringEquiv(input.password, input.passwordConfirmation)) {
      throw errorMsg(errorMessages.invalidPasswordFormat);
    }
    const hashedPassword = bcrypt.hashSync(input.password, saltRounds);
    const newUser = new Users({
      firstName: input.firstName,
      lastName: input.lastName,
      userName: input.userName,
      password: hashedPassword,
      image: input.image
    });
    newUser.id = newUser._id;
    return new Promise((resolve, reject) => {
      newUser.save((err) => {
        if (err) reject(err);
        else resolve(newUser);
      });
    });
  }
};
