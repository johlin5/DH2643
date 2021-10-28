/**
 * SETUP
 */
import dotenv from "dotenv";
import { resolve } from "path";
import { dbString } from "../auth";
import { log } from "./utils/utils";
import express, { urlencoded, json, static as expressStatic, Request, Response } from "express";
import { startApolloServer } from "./graphql/appolloServer";
import { connectDB } from "./db/dbConnector";
import { createProxyMiddleware } from "http-proxy-middleware";
import cors from "cors";

/**
 * SETTINGS
 */
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const publicPath = resolve(__dirname, "../client/dist/");

/**
 * MIDDLEWARES
 */
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(expressStatic(publicPath));

// MIDDLEWARE DEBUG
app.use(cors());

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://app.pixelencounter.com", //original url
    changeOrigin: true,
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers["Access-Control-Allow-Origin"] = "*";
    }
  })
);

/**
 * API BINDINGS
 */
app.get("*", (req: Request, res: Response) => {
  res.sendFile(resolve(__dirname, "..", "client", "dist", "index.html"));
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
