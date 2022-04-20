import Rectify from "rectifyjs";

declare global {
  namespace Express {
    interface Request {
      db: Rectify;
    }
  }
}
