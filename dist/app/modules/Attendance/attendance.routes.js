"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const attendance_controller_1 = require("./attendance.controller");
const attendanceRoutes = (0, express_1.Router)();
// female routes
attendanceRoutes.post("/create-female", attendance_controller_1.attendanceController.createFemaleAttendance);
attendanceRoutes.get("/get-last-female", attendance_controller_1.attendanceController.getLastFemaleAttendance);
attendanceRoutes.get("/get-female", attendance_controller_1.attendanceController.getFemaleAttendance);
// male routes
attendanceRoutes.post("/create-male", attendance_controller_1.attendanceController.createMaleAttendance);
attendanceRoutes.get("/get-last-male", attendance_controller_1.attendanceController.getLastMaleAttendance);
attendanceRoutes.get("/get-male", attendance_controller_1.attendanceController.getMaleAttendance);
// child routes
attendanceRoutes.post("/create-child", attendance_controller_1.attendanceController.createChildAttendance);
attendanceRoutes.get("/get-last-child", attendance_controller_1.attendanceController.getLastChildAttendance);
attendanceRoutes.get("/get-all-last-attendance", attendance_controller_1.attendanceController.getAllLastAttendance);
attendanceRoutes.get("/get-child", attendance_controller_1.attendanceController.getChildAttendance);
// comment routes
attendanceRoutes.post("/create-comment", attendance_controller_1.attendanceController.createComment);
attendanceRoutes.get("/get-comment", attendance_controller_1.attendanceController.getComments);
// attendanceRoutes.get("/current", attendanceController.getCurrentEntry);
// attendanceRoutes.get("/", attendanceController.getSingleAttendance);
exports.default = attendanceRoutes;
