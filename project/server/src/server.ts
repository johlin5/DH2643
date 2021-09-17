/**
 * SETUP
 */
import * as properties from "./properties";
import { dbString } from "../auth";
import betterLogging, { expressMiddleware, Theme } from "better-logging";
import cookieParser from "cookie-parser";
import { resolve } from "path";
import express, { urlencoded, json, static as expressStatic, Request, Response } from "express";
import expressSession from "express-session";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/schema";
import { connectDB } from "./db/dbConnector";
const app = express();

let server = null;
const startServer = async () => {
  server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
};
startServer();

/**
 * SETTINGS
 */
const PORT = process.env.PORT || properties.PORT;
const publicPath = resolve(__dirname, "../client/dist/");
betterLogging(console, {
  color: Theme.green
});
console.logLevel = 4; // debug level
const session = expressSession({
  secret: properties.secret,
  name: "Quiz",
  resave: true,
  saveUninitialized: true
});

/**
 * MIDDLEWARES
 */
app.use(
  expressMiddleware(console, {
    ip: { show: true, color: Theme.green.base },
    method: { show: true, color: Theme.green.base },
    header: { show: false },
    path: { show: true },
    body: { show: true }
  })
);
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
  console.debug(cookie);
  next();
});
app.use("*", (req: Request, res: Response, next) => {
  console.debug("REQ SESSION", req.session);
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
connectDB(dbString)
  .then(() => console.info("DB CONNECTED"))
  .then(() => app.listen(PORT, () => console.info(`Listening on http://localhost:${PORT}`)))
  .catch((err) => console.error(err));
