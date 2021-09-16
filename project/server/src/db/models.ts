import mongoose from "mongoose";

const requiredStringType = {
  type: String,
  required: true
};

const optStringType = {
  type: String
};

const userSchema = new mongoose.Schema({
  firstName: optStringType,
  lastName: optStringType,
  userName: requiredStringType,
  password: requiredStringType,
  image: optStringType,
  biography: optStringType
});

/*
export const history = new Mongoose.Schema({

});
*/

export const Users = mongoose.model("Users", userSchema);
