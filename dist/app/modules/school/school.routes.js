"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const school_controller_1 = require("./school.controller");
const schoolRouter = (0, express_1.Router)();
schoolRouter.post("/", school_controller_1.schoolController.createSchool);
schoolRouter.get("/", school_controller_1.schoolController.getAllSchool);
schoolRouter.post("/school-login", school_controller_1.schoolController.schoolLogin);
exports.default = schoolRouter;
