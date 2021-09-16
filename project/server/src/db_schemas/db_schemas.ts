import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  userName: {
    type: String
  },
  password: {
    type: String
  },
  image: {
    type: String
  }
});

/*
export const history = new Mongoose.Schema({

});
*/
