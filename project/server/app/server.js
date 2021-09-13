/**
 * SETUP
 */
const PORT = process.env.PORT || 8080,
  betterLogging = require("better-logging"),
  express = require("express"),
  app = express();

const { Theme } = betterLogging;
betterLogging(console, {
  color: Theme.green,
});
console.logLevel = 4;
app.use(
  betterLogging.expressMiddleware(console, {
    ip: { show: true, color: Theme.green.base },
    method: { show: true, color: Theme.green.base },
    header: { show: false },
    path: { show: true },
    body: { show: true },
  })
);

app.listen(PORT, () => console.debug(`Listening on http://localhost:${PORT}`));
