import jwt from "jsonwebtoken";
import { hash } from "bcrypt";
import { debug } from "../utils/utils";
import { ContextAuth } from "../utils/types";

const saltRounds = 10;
const debugIsAuth = debug.extend("isAuth");

export const isAuth = (request: any): ContextAuth => {
  const authHeader = request.req.headers.authorization;
  const notAuth = { isAuth: false, userId: null };
  debugIsAuth("AuthHeader %o", authHeader);
  if (!authHeader) {
    return notAuth;
  }
  const token = authHeader.replace("Bearer ", "");
  debugIsAuth("AuthToken %o", token);
  if (!token) {
    // No token found
    return notAuth;
  }
  let decodeToken = null;
  try {
    decodeToken = jwt.verify(token, process.env.SECRET);
    debugIsAuth("AuthDecodeToken %o", decodeToken);
  } catch (err) {
    // Not authenticated
    return notAuth;
  }
  if (!decodeToken) {
    // Random error
    return notAuth;
  }
  return { isAuth: true, userId: decodeToken.userId };
};

export const generateNewToken = (userId: string): string => {
  debugIsAuth("GENERATETOKEN: %s", userId);
  return jwt.sign({ userId: userId, date: new Date() }, process.env.SECRET);
};

export const hashPassword = async (password: string): Promise<string> => {
  const hashed = hash(password, saltRounds);
  return hashed;
};
