/**
 * SETUP
 */
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { resolve } from "path";
import { dbString } from "../auth";
import { log, debug } from "./utils/utils";
import express, { urlencoded, json, static as expressStatic, Request, Response } from "express";
import expressSession from "express-session";
import { startApolloServer } from "./graphql/appolloServer";
import { connectDB } from "./db/dbConnector";

/**
 * SETTINGS
 */
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const publicPath = resolve(__dirname, "../client/dist/");
const session = expressSession({
  secret: process.env.SECRET,
  name: "Quiz",
  resave: true,
  saveUninitialized: true
});
const debugCookie = debug.extend("cookie");
const debugSession = debug.extend("session");

/**
 * MIDDLEWARES
 */
app.use(urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRET));
app.use(json());
app.use(session);
app.use(expressStatic(publicPath));

// MIDDLEWARE DEBUG
app.use((req: Request, res: Response, next) => {
  const cookie = req.cookies.quiz;
  if (!cookie) {
    let randomNumber = Math.random().toString();
    randomNumber = randomNumber.substring(2, randomNumber.length);
    res.cookie("quiz", randomNumber, {
      maxAge: 900000,
      httpOnly: true
    });
  }
  debugCookie("Cookie", cookie);
  next();
});

app.use("*", (req: Request, _res: Response, next) => {
  debugSession("Session: %o", req.session);
  next();
});

/**
 * API BINDINGS
 */
app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

/**
 * Awaaaay we goooooooooooooo!!!!!!
 */
startApolloServer(app)
  .then(() => connectDB(dbString))
  .then(() =>
    app.listen(PORT, () => {
      log.info(`Listening on http://localhost:${PORT}`);
      log.info(`GRAPHIQL at http://localhost:${PORT}/graphql`);
    })
  )
  .catch((err) => log.error(err));
