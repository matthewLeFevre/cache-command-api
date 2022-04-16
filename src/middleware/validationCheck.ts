import { send } from "@everlast-brands/error-handling";
import { validationResult } from "express-validator";

export default function validationCheck(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return send({
      res,
      data: errors,
      message: "Errors found",
      status: 400,
    });
  }
  next();
}
