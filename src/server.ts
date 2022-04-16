import express from "express";
import dotenv from "dotenv";
import ExampleRouter from "./routes/example";
import cors from "cors";

export default function createServer() {
  dotenv.config();

  const app = express();
  app.use(cors());

  // Performs the same task that body parser does
  app.use(express.json());

  // App routes
  app.use("/example", ExampleRouter);

  return app;
}
