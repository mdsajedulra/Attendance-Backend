import { Router } from "express";
import { schoolController } from "./school.controller";

const schoolRouter = Router();

schoolRouter.post("/", schoolController.createSchool);
schoolRouter.get("/", schoolController.getAllSchool);
schoolRouter.post("/school-login", schoolController.schoolLogin);

export default schoolRouter;
