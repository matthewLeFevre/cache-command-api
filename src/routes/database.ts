import { asyncWrapper, send } from "@everlast-brands/error-handling";
import { randomUUID } from "crypto";
import { Request, Router } from "express";
import r from "rethinkdb";

const DatabaseRouter = Router();

DatabaseRouter.get(
  "/",
  asyncWrapper(async (req: Request, res) => {
    const databases = await req.db.tables.databases.getAll();
    send({ res, data: databases });
  })
);
DatabaseRouter.get(
  "/:id",
  asyncWrapper(async (req: Request, res) => {
    const database = await req.db.tables.databases.getWithId(req.params.id);
    send({ res, data: database });
  })
);
DatabaseRouter.post(
  "/",
  asyncWrapper(async (req: Request, res) => {
    const { name, description } = req.body;
    const { config_changes } = await r.dbCreate(name).run(req.db.conn);
    const { id } = config_changes[0].new_val;
    await req.db.tables.databases.createWithId(id, {
      name,
      description: description || undefined,
      key: randomUUID(),
      tokens: [],
    });
    send({ res });
  })
);
DatabaseRouter.put(
  "/:id",
  asyncWrapper(async (req: Request, res) => {
    const database = await req.db.tables.databases.getWithId(req.params.id);
    const newDatabase = { ...database };
    for (const [key, value] of Object.entries(req.body)) {
      if (value) newDatabase[key] = value;
    }
    await req.db.tables.databases.updateWithId(req.params.id, newDatabase);
    send({ res, data: newDatabase });
  })
);
DatabaseRouter.delete(
  "/:id",
  asyncWrapper(async (req: Request, res) => {
    const db = await req.db.tables.databases.getWithId(req.params.id);
    const result = await r.dbDrop(db.name).run(req.db.conn);
    console.log(result);
    if (result?.dbs_dropped === 1) {
      await req.db.tables.databases.deleteWithId(req.params.id);
    } else {
      throw new Error("Did not delete db");
    }
    send({ res });
  })
);

export default DatabaseRouter;
