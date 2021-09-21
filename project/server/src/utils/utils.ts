import { configure, getLogger } from "log4js";

const loggerConfig = {
  appenders: {
    out: { type: "stdout", layout: { type: "colored" } }
  },
  categories: {
    default: { appenders: ["out"], level: "trace" }
  }
};
configure(loggerConfig);

export const log = getLogger();

export const isNull = (field: unknown): boolean => field === null;

export const validatePassword = (password: string): boolean => {
  const regex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
  return regex.test(password);
};

export const checkStringEquiv = (string1: string, string2: string): boolean => {
  return String(string1).localeCompare(String(string2)) === 0;
};

export const errorMsg = (msg: string): Error => {
  return new Error(msg);
};
