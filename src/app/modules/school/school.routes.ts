import { Router } from "express";
import { schoolController } from "./school.controller";
import multer from "multer";

const schoolRouter = Router();

const upload = multer({ dest: "uploads/" });

schoolRouter.post("/", schoolController.createSchool);
schoolRouter.post("/bulk", upload.single("file"), schoolController.bulkSchool);
schoolRouter.get("/", schoolController.getAllSchool);
schoolRouter.patch("/:id", schoolController.updateSchool);
schoolRouter.post("/school-login", schoolController.schoolLogin);

export default schoolRouter;
