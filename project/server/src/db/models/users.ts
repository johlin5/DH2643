import mongoose, { Schema } from "mongoose";

const requiredStringType = {
  type: String,
  required: true
};

const optStringType = {
  type: String
};

interface UserDoc extends Document {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  image: string;
  biography: string;
}

const userSchema = new mongoose.Schema({
  firstName: optStringType,
  lastName: optStringType,
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: requiredStringType,
  image: optStringType,
  biography: optStringType,
  auth: {
    type: Schema.Types.ObjectId,
    ref: 'AuthData'
  }
});

/*
export const history = new Mongoose.Schema({

});
*/

export const Users = mongoose.model<UserDoc>("Users", userSchema);
