import { Router } from "express";
import userRoute from "../modules/user/user.routes";
import authrouter from "../modules/auth/auth.routes";
import spotRouter from "../modules/spot/spot.routes";
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
    path: "/spot",
    route: spotRouter,
  },
  {
    path: "/attendance",
    route: attendanceRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
