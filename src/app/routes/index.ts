import { Router } from "express";
import userRoute from "../modules/user/user.routes";
import authrouter from "../modules/auth/auth.routes";
import schoolRouter from "../modules/school/school.routes";
import attendanceRoutes from "../modules/Attendance/attendance.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/auth",
    route: authrouter,
  },
  {
    path: "/school",
    route: schoolRouter,
  },
  {
    path: "/attendance",
    route: attendanceRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
