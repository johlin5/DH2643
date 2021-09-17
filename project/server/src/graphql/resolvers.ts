import { Users } from "../db/models";

/**
 * GraphQL Resolvers
 **/

export const resolvers = {
  Query: {
    findUser: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Users.findOne({ _id: id }, (err, users) => {
          if (err) reject(err);
          else resolve(users);
        });
      });
    },
    login: async ({ username, password }) => {}
  },
  Mutation: {
    createUser: (root, { input }) => {
      const newUser = new Users({
        firstName: input.firstName,
        lastName: input.lastName,
        userName: input.userName,
        password: input.password,
        image: input.image,
        biography: input.biography
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
