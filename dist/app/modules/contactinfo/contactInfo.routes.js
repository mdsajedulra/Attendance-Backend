"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactInfo_controller_1 = require("./contactInfo.controller");
const contactInfoRouter = (0, express_1.Router)();
// contactInfoRouter.get("/", (req, res)=> res.send("Contact info route is working")  )
contactInfoRouter.post("/", contactInfo_controller_1.contactInfoController.createContactInfo);
contactInfoRouter.get("/", contactInfo_controller_1.contactInfoController.getContactInfo);
contactInfoRouter.patch("/", contactInfo_controller_1.contactInfoController.updateContactInfo);
exports.default = contactInfoRouter;
