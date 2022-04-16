import { Request, Response } from "express";
import fs from "fs";
import readline from "readline";
import { send } from "@everlast-brands/error-handling";

export const exampleControllerMethod = (req: Request, res: Response) => {
  const message = `Hello user from ${req.hostname} you sent a request from this ip: ${req.ip}. Welcome to this example method!`;
  send({ res, message, data: { ping: "pong" } });
};
