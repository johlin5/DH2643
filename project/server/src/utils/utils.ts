import winston, { format, transports } from "winston";

export const log = winston.createLogger({
  level: "debug",
  exitOnError: false,
  format: format.combine(
    format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
    format.json(),
    format.colorize(),
    format.printf((info) => `${[info.timestamp]}: ${info.level}: ${info.message}`)
  ),
  transports: [new transports.Console()]
});

export const isNull = (field: unknown): boolean => field === null;

export const validatePassword = (password: string): boolean => {
  const regex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
  return regex.test(password);
};

export const checkStringEquiv = (string1: string, string2: string): boolean => {
  return String(string1).localeCompare(String(string2)) === 0;
};
