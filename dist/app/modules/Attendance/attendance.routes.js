"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const attendance_controller_1 = require("./attendance.controller");
const attendanceRoutes = (0, express_1.Router)();
attendanceRoutes.post("/", attendance_controller_1.attendanceController.createAttendance);
// get attendance all by filter
attendanceRoutes.get("/", attendance_controller_1.attendanceController.getAttendance);
attendanceRoutes.get("/report", attendance_controller_1.attendanceController.getAttendanceReport);
// get last attendacne
attendanceRoutes.get("/get-last", attendance_controller_1.attendanceController.getLastAttendance);
// banana routes
attendanceRoutes.get("/get-comment", attendance_controller_1.attendanceController.getComment);
attendanceRoutes.delete("/:id", attendance_controller_1.attendanceController.deleteAttendance);
// attendanceRoutes.get("/current", attendanceController.getCurrentEntry);
// attendanceRoutes.get("/", attendanceController.getSingleAttendance);
exports.default = attendanceRoutes;
