import { Router } from "express";
import { attendanceController } from "./attendance.controller";

const attendanceRoutes = Router();

// female routes

attendanceRoutes.post(
  "/create-female",
  attendanceController.createFemaleAttendance
);
attendanceRoutes.get(
  "/get-last-female",
  attendanceController.getLastFemaleAttendance
);
attendanceRoutes.get("/get-female", attendanceController.getFemaleAttendance);

// male routes

attendanceRoutes.post(
  "/create-male",
  attendanceController.createMaleAttendance
);
attendanceRoutes.get(
  "/get-last-male",
  attendanceController.getLastMaleAttendance
);
attendanceRoutes.get("/get-male", attendanceController.getMaleAttendance);

// child routes
attendanceRoutes.post(
  "/create-child",
  attendanceController.createChildAttendance
);

attendanceRoutes.get(
  "/get-last-child",
  attendanceController.getLastChildAttendance
);
attendanceRoutes.get(
  "/get-all-last-attendance",
  attendanceController.getAllLastAttendance
);
attendanceRoutes.get(
  "/get-all-attendance",
  attendanceController.getAllAttendance
);
attendanceRoutes.get("/get-child", attendanceController.getChildAttendance);

// comment routes
attendanceRoutes.post("/create-comment", attendanceController.createComment);
attendanceRoutes.get("/get-comment", attendanceController.getComments);
// attendanceRoutes.get("/current", attendanceController.getCurrentEntry);
// attendanceRoutes.get("/", attendanceController.getSingleAttendance);

export default attendanceRoutes;
