import { Router } from "express";
import { attendanceController } from "./attendance.controller";

const attendanceRoutes = Router();

attendanceRoutes.post(
  "/",
  attendanceController.createAttendance
);

// get attendance all by filter

attendanceRoutes.get(
  "/",
  attendanceController.getAttendance
);

// get last attendacne
attendanceRoutes.get(
  "/get-last",
  attendanceController.getLastAttendance
);
// banana routes

attendanceRoutes.post(
  "/create-banana",
  attendanceController.createBananaAttendance
);
attendanceRoutes.get(
  "/get-last-banana",
  attendanceController.getLastBananaAttendance
);
attendanceRoutes.get("/get-banana", attendanceController.getBananaAttendance);

// banruti routes

attendanceRoutes.post(
  "/create-banruti",
  attendanceController.createBanrutiAttendance
);
attendanceRoutes.get(
  "/get-last-banruti",
  attendanceController.getLastBanrutiAttendance
);
attendanceRoutes.get("/get-banruti", attendanceController.getBanrutiAttendance);

// egg routes
attendanceRoutes.post(
  "/create-egg",
  attendanceController.createEggAttendance
);

attendanceRoutes.get(
  "/get-last-egg",
  attendanceController.getLastEggAttendance
);
attendanceRoutes.get(
  "/get-all-last-attendance",
  attendanceController.getAllLastAttendance
);

// get all attendance

attendanceRoutes.get(
  "/get-all-attendance",
  attendanceController.getAllAttendance
);
attendanceRoutes.get("/get-egg", attendanceController.getEggAttendance);

// comment routes
attendanceRoutes.post("/create-comment", attendanceController.createComment);
attendanceRoutes.get("/get-comment", attendanceController.getComments);
attendanceRoutes.delete("/:id", attendanceController.deleteAttendance);
attendanceRoutes.get("/missing", attendanceController.missing);
// attendanceRoutes.get("/current", attendanceController.getCurrentEntry);
// attendanceRoutes.get("/", attendanceController.getSingleAttendance);

export default attendanceRoutes;
