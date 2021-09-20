import mongoose, { Schema } from "mongoose";

const requiredStringType = {
  type: String,
  required: true
};

const optStringType = {
  type: String
};

export interface UserDoc extends Document {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  image: string;
  biography: string;
}

const userSchema = new mongoose.Schema({
  id: requiredStringType,
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
    ref: "AuthData"
  }
});

export const Users = mongoose.model<UserDoc>("Users", userSchema);
