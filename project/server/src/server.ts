/**
 * SETUP
 */
import * as properties from "./properties";
import { dbString } from "../auth";
import cookieParser from "cookie-parser";
import { resolve } from "path";
import { log } from "./utils/utils";
import express, { urlencoded, json, static as expressStatic, Request, Response } from "express";
import expressSession from "express-session";
import { startServer } from "./graphql/apollo";
import { connectDB } from "./db/dbConnector";

/**
 * SETTINGS
 */
const app = express();
const PORT = process.env.PORT || properties.PORT;
const publicPath = resolve(__dirname, "../client/dist/");
const session = expressSession({
  secret: properties.secret,
  name: "Quiz",
  resave: true,
  saveUninitialized: true
});

/**
 * MIDDLEWARES
 */
app.use(urlencoded({ extended: true }));
app.use(cookieParser(properties.secret));
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
  log.debug(cookie);
  next();
});

app.use("*", (req: Request, res: Response, next) => {
  log.debug("REQ SESSION", req.session);
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
startServer(app)
  .then(() => connectDB(dbString))
  .then(() => {
    log.info("DB CONNECTED");
    app.listen(PORT, () => log.info(`Listening on http://localhost:${PORT}`));
  })
  .catch((err) => log.error(err));
