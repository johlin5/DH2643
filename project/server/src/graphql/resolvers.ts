import { Users } from "../db/models/users";
import bcrypt from "bcrypt";
import { errorMsg } from "../utils/errorUtils";
import { validatePassword, checkStringEquiv } from "../utils/utils";
import * as errorMessages from "../utils/errorMessages";

const saltRounds = 10;

/**
 * GraphQL Resolvers
 **/

export const resolvers = {
  Query: {
    findUserById: (_root, { id }) => {
      return new Promise((resolve, reject) => {
        Users.findById(id, (err, users) => {
          if (err) reject(err);
          else resolve(users);
        });
      });
    },
    findUserByUserName: (_root, { userName }) => {
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
  },
  Mutation: {
    createUser: async (_root, { input }: any) => {
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
  }
};
