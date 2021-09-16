/**
 * SETUP
 */
import betterLogging, { expressMiddleware, Theme } from "better-logging";
import cookieParser from "cookie-parser";
import { resolve } from "path";
import express, { urlencoded, json, static as expressStatic, Request, Response } from "express";
import expressSession from "express-session";
const app = express();

/**
 * SETTINGS
 */
const PORT = process.env.PORT || 8080;
const publicPath = resolve(__dirname, "../client/dist/");
betterLogging(console, {
  color: Theme.green,
});
console.logLevel = 4; // debug level
const session = expressSession({
  secret: "toptoptopsecret",
  name: "Quiz",
  resave: true,
  saveUninitialized: true,
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
    body: { show: true },
  })
);
app.use(urlencoded({ extended: true }));
app.use(cookieParser("toptoptopsecret"));
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
      httpOnly: true,
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
 app.get('/', (req: Request, res: Response) => {
  res.send('Application works!');
});

/**
 * Awaaaay we goooooooooooooo!!!!!!
 */
app.listen(PORT, () => console.info(`Listening on http://localhost:${PORT}`));
