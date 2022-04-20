import express, { Request } from "express";
import dotenv from "dotenv";
import ExampleRouter from "./routes/example";
import cors from "cors";
import { asyncWrapper, send } from "@everlast-brands/error-handling";
import Rectify from "rectifyjs";
import r from "rethinkdb";
import { randomUUID } from "crypto";
import DatabaseRouter from "./routes/database";

export default function createServer() {
  dotenv.config();

  const app = express();
  app.use(cors());

  // Performs the same task that body parser does
  app.use(express.json());

  let DB;
  (async function () {
    DB = await Rectify.build({
      db: <string>process.env.RETHINK_DB_NAME,
      host: <string>process.env.RETHINK_DB_HOST,
      port: parseInt(<string>process.env.RETHINK_DB_PORT),
      tableNames: ["users", "databases"],
    });
  })();

  app.use((req, res, next) => {
    req.db = DB;
    next();
  });

  // App routes
  app.use("/databases", DatabaseRouter);

  return app;
}
