/**
 * SETUP
 */
const betterLogging = require("better-logging"),
  cookieParser = require("cookie-parser"),
  path = require("path"),
  express = require("express"),
  expressSession = require("express-session"),
  app = express();

/**
 * SETTINGS
 */
const PORT = process.env.PORT || 8080;
const publicPath = path.resolve(__dirname, "../client/dist/");
const { Theme } = betterLogging;
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
  betterLogging.expressMiddleware(console, {
    ip: { show: true, color: Theme.green.base },
    method: { show: true, color: Theme.green.base },
    header: { show: false },
    path: { show: true },
    body: { show: true },
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("toptoptopsecret"));
app.use(express.json());
app.use(session);
app.use(express.static(publicPath));

// MIDDLEWARE DEBUG
app.use((req, res, next) => {
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
app.use("*", (req, res, next) => {
  console.debug("REQ SESSION", req.session);
  next();
});

/**
 * API BINDINGS
 */

/**
 * Awaaaay we goooooooooooooo!!!!!!
 */
app.listen(PORT, () => console.info(`Listening on http://localhost:${PORT}`));
