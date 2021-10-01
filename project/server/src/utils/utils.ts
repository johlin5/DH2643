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
