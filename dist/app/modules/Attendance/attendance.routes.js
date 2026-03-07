"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const attendance_controller_1 = require("./attendance.controller");
const attendanceRoutes = (0, express_1.Router)();
// banana routes
attendanceRoutes.post("/create-banana", attendance_controller_1.attendanceController.createBananaAttendance);
attendanceRoutes.get("/get-last-banana", attendance_controller_1.attendanceController.getLastBananaAttendance);
attendanceRoutes.get("/get-banana", attendance_controller_1.attendanceController.getBananaAttendance);
// banruti routes
attendanceRoutes.post("/create-banruti", attendance_controller_1.attendanceController.createBanrutiAttendance);
attendanceRoutes.get("/get-last-banruti", attendance_controller_1.attendanceController.getLastBanrutiAttendance);
attendanceRoutes.get("/get-banruti", attendance_controller_1.attendanceController.getBanrutiAttendance);
// egg routes
attendanceRoutes.post("/create-egg", attendance_controller_1.attendanceController.createEggAttendance);
attendanceRoutes.get("/get-last-egg", attendance_controller_1.attendanceController.getLastEggAttendance);
attendanceRoutes.get("/get-all-last-attendance", attendance_controller_1.attendanceController.getAllLastAttendance);
// get all attendance
attendanceRoutes.get("/get-all-attendance", attendance_controller_1.attendanceController.getAllAttendance);
attendanceRoutes.get("/get-egg", attendance_controller_1.attendanceController.getEggAttendance);
// comment routes
attendanceRoutes.post("/create-comment", attendance_controller_1.attendanceController.createComment);
attendanceRoutes.get("/get-comment", attendance_controller_1.attendanceController.getComments);
attendanceRoutes.delete("/:id", attendance_controller_1.attendanceController.deleteAttendance);
attendanceRoutes.get("/missing", attendance_controller_1.attendanceController.missing);
// attendanceRoutes.get("/current", attendanceController.getCurrentEntry);
// attendanceRoutes.get("/", attendanceController.getSingleAttendance);
exports.default = attendanceRoutes;
