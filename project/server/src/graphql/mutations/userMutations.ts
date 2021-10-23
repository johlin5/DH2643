import { generateNewToken, hashPassword } from "../../validations/authentication";
import {
  validatePassword,
  validateUniqueUser,
  verifyPassword,
  validateExistingUser,
  validateContext
} from "../../validations/validators";
import { createNewUser } from "../../persistence/creators";
import { updateUser } from "../../persistence/updates";
import { UserInput, LoginInput, UserUpdateInput } from "../../utils/types";

export default {
  signup: async (_parent: unknown, { input }: UserInput): Promise<unknown> => {
    await validateUniqueUser(input);
    validatePassword(input.password, input.passwordConfirmation);
    const hashed = await hashPassword(input.password);
    const user = await createNewUser(input, hashed);
    const token = generateNewToken(user.id);
    return { token, user };
  },
  login: async (_parent: unknown, { input: { userName, password } }: LoginInput): Promise<unknown> => {
    const user = await validateExistingUser(userName);
    await verifyPassword(password, user.password);
    const token = generateNewToken(user.id);
    return { token, user };
  },
  updateUser: async (_parent: unknown, { input }: UserUpdateInput, context: any) => {
    const userId = validateContext(context);
    const updated = await updateUser(userId, input);
    return updated;
  }
};
