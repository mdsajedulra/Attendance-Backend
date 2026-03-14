import { Router } from "express";
import { attendanceController } from "./attendance.controller";

const attendanceRoutes = Router();

attendanceRoutes.post("/", attendanceController.createAttendance);


// get attendance all by filter

attendanceRoutes.get("/", attendanceController.getAttendance);
attendanceRoutes.patch("/:id", attendanceController.updateAttendance);
attendanceRoutes.get("/report", attendanceController.getAttendanceReport);

// get last attendacne
attendanceRoutes.get("/get-last", attendanceController.getLastAttendance);
// banana routes



attendanceRoutes.get("/get-comment", attendanceController.getComment);
attendanceRoutes.delete("/:id", attendanceController.deleteAttendance);

attendanceRoutes.get("/missing", attendanceController.getMissing);
attendanceRoutes.post("/create-comment", attendanceController.createComment);
attendanceRoutes.get("/comment", attendanceController.getComment);
attendanceRoutes.patch("/comment/:id", attendanceController.updateComment);
attendanceRoutes.get("/singleComment/:id", attendanceController.getSingleComment);
// attendanceRoutes.get("/", attendanceController.getSingleAttendance);

export default attendanceRoutes;
