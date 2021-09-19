import { Users } from "../db/models/users";
import bcrypt from "bcrypt";
import { errorMsg } from "../utils/errorUtils";
import { validatePassword } from "../utils/utils";
import * as errorProperties from "../utils/errorProperties";

const saltRounds = 10;

/**
 * GraphQL Resolvers
 **/

export const resolvers = {
  Query: {
    findUser: async (root: any, { id }: any) => {
      const user = await Users.findById({ id });
      if (!user) {
        errorMsg(errorProperties.userDoesNotExist);
      }
      return { ...user, password: null };
    }
    /*login: async (root: any, { input }) => {
      const user = await Users.findOne({ userName: input.userName });
      if (!user) {
        errorMsg(errorProperties.userDoesNotExist);
      }
      bcrypt.compare(input.password, user.password, (err, isValid) => {
        if (err || !isValid) {
        }
      });
    }*/
  },
  Mutation: {
    createUser: async (root: any, { input }: any) => {
      const expectedUser = await Users.findOne({ userName: input.userName });
      if (expectedUser) {
        errorMsg(errorProperties.userAlreadyExists);
      }
      if(!validatePassword(input.password)) {
        errorMsg("Password has to be at least 8 characters long, include at least 1 lowercase letter, 1 capital letter, 1 number, 1 special character => !@#$%^&*");
      }
      const test = String(input.password).localeCompare(String(input.password)); //TODO and compare pw1, pw2
      const hashedPassword = bcrypt.hashSync(input.password, saltRounds);
      const newUser = new Users({
        firstName: input.firstName,
        lastName: input.lastName,
        userName: input.userName,
        password: hashedPassword,
        image: input.image
      });
      await newUser.save();
      return {...newUser, userName: newUser.userName, password: null, _id: newUser._id};
    }
  }
};
