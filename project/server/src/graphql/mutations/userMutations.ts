import { signUserJwt, hashPassword } from "../validations/authentication";
import { validatePassword, validateUniqueUser, verifyPassword, validateExistingUser } from "../validations/validators";
import { createNewUser } from "../../db/persistence/creators";
import { UserInput, LoginInput } from "../../utils/types";

export default {
  signup: async (_parent: unknown, { input }: UserInput): Promise<unknown> => {
    await validateUniqueUser(input);
    validatePassword(input.password, input.passwordConfirmation);
    const hashed = await hashPassword(input.password);
    const user = await createNewUser(input, hashed);
    const token = signUserJwt(user.id);
    return { token, user };
  },
  login: async (_parent: unknown, { input: { userName, password } }: LoginInput): Promise<unknown> => {
    const user = await validateExistingUser(userName);
    await verifyPassword(password, user.password);
    const token = signUserJwt(user.id);
    return { token, user };
  }
};
