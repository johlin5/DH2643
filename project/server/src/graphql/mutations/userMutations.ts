import { Users } from "../../db/models/users";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { throwMsg, validatePassword, createNewUser } from "../../utils/utils";
import * as errorMessages from "../../utils/errorMessages";
import * as type from "../../utils/types";

const saltRounds = 10;

export default {
  signup: async (_parent: unknown, { input }: type.UserInput): Promise<unknown> => {
    const expectedUser = await Users.findOne({ userName: input.userName });
    if (expectedUser) {
      throwMsg(errorMessages.userAlreadyExists);
    }
    validatePassword(input.password, input.passwordConfirmation);
    const hashed = await hash(input.password, saltRounds);
    const user = await createNewUser(input, hashed);
    const token = jwt.sign({ userId: user.id }, process.env.SECRET);
    return { token, user };
  },
  login: async (_parent: unknown, { input: { userName, password } }: type.LoginInput): Promise<unknown> => {
    const user = await Users.findOne({ userName: userName });
    if (!user) {
      throwMsg(errorMessages.userDoesNotExist);
    }
    const valid = await compare(password, user.password);
    if (!valid) {
      throwMsg(errorMessages.wrongCredentidals);
    }
    const token = jwt.sign({ userId: user.id }, process.env.SECRET);
    return { token, user };
  }
};
