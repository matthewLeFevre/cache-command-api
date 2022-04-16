import { send } from "@everlast-brands/error-handling";

// Wrap endpoints that are async to automatically handle errors etc
export default function asyncWrapper(fn: Function) {
  return async function (req, res) {
    try {
      return await fn(req, res);
    } catch (err) {
      console.error(err);
      if (!(<any>err).response) {
        send({ res, status: 500, message: (<any>err).message });
      } else {
        send({
          res,
          data: (<any>err).response?.data?.data,
          status: (<any>err).response?.status,
          message: (<any>err).response?.data?.message,
        });
      }
    }
  };
}
