"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("../modules/user/user.routes"));
const auth_routes_1 = __importDefault(require("../modules/auth/auth.routes"));
const spot_routes_1 = __importDefault(require("../modules/spot/spot.routes"));
const attendance_routes_1 = __importDefault(require("../modules/Attendance/attendance.routes"));
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/user",
        route: user_routes_1.default,
    },
    {
        path: "/auth",
        route: auth_routes_1.default,
    },
    {
        path: "/spot",
        route: spot_routes_1.default,
    },
    {
        path: "/attendance",
        route: attendance_routes_1.default,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
