import { Router } from "express";
import { attendanceController } from "./attendance.controller";

const attendanceRoutes = Router();

attendanceRoutes.post("/", attendanceController.createAttendance);


// get attendance all by filter

attendanceRoutes.get("/", attendanceController.getAttendance);
attendanceRoutes.get("/report", attendanceController.getAttendanceReport);

// get last attendacne
attendanceRoutes.get("/get-last", attendanceController.getLastAttendance);
// banana routes



attendanceRoutes.get("/get-comment", attendanceController.getComment);
attendanceRoutes.delete("/:id", attendanceController.deleteAttendance);

attendanceRoutes.post("/create-comment", attendanceController.createComment);
attendanceRoutes.get("/missing", attendanceController.getMissing);
attendanceRoutes.get("/comment", attendanceController.getComment);
// attendanceRoutes.get("/", attendanceController.getSingleAttendance);

export default attendanceRoutes;
