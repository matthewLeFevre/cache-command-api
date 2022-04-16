import { Router } from "express";
import { exampleControllerMethod } from "../controllers/example";

const ExampleRouter = Router();

ExampleRouter.get("/", exampleControllerMethod);

export default ExampleRouter;
