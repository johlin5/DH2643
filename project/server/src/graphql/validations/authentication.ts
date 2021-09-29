import jwt from "jsonwebtoken";
import { hash } from "bcrypt";

const saltRounds = 10;

export const isAuth = (request: any) => {
  const authHeader = request.req.headers.authorization;
  const notAuth = { isAuth: false, userId: null };
  if (!authHeader) {
    return notAuth;
  }
  const token = authHeader.replace("Bearer ", "");
  if (!token) {
    // No token found
    return notAuth;
  }
  let decodeToken = null;
  try {
    decodeToken = jwt.verify(token, process.env.SECRET);
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

export const signUserJwt = (userId: string): string => {
  return jwt.sign({ userId: userId }, process.env.SECRET);
};

export const hashPassword = async (password: string): Promise<string> => {
  const hashed = hash(password, saltRounds);
  return hashed;
};
