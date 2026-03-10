"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const globalErrorHandler_1 = require("./app/middlewares/globalErrorHandler");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "http://localhost:8081",
    "http://192.168.0.105:8081",
    "http://192.168.0.105:19000",
    "http://192.168.0.105",
    "https://admin-dashboard-gamma-inky-62.vercel.app",
];
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        // Mobile apps / Postman / server-to-server
        if (!origin) {
            return callback(null, true);
        }
        // Allowed list
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        // Allow all localhost ports (useful for dev)
        if (origin.startsWith("http://localhost")) {
            return callback(null, true);
        }
        // Allow all expo dev servers
        if (origin.includes("expo")) {
            return callback(null, true);
        }
        return callback(null, true); // fallback allow
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
// important for preflight
app.options("*", (0, cors_1.default)());
app.use("/api/v1", routes_1.default);
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to osaca Careers",
    });
});
app.use(globalErrorHandler_1.globalErrorHandler);
app.use(notFound_1.default);
exports.default = app;
