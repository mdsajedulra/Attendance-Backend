"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const spot_controller_1 = require("./spot.controller");
const spotRouter = (0, express_1.Router)();
spotRouter.post("/", spot_controller_1.spotController.createSpot);
spotRouter.get("/", spot_controller_1.spotController.getAllSpot);
spotRouter.post("/spot-login", spot_controller_1.spotController.spotLogin);
exports.default = spotRouter;
