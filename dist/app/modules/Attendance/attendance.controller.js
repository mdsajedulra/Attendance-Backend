"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attendanceController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const attendance_service_1 = require("./attendance.service");
// banana attendance controller
const createBananaAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield attendance_service_1.attendanceService.createBananaAttendance(payload);
    (0, sendResponse_1.default)(res, {
        message: "banana attendance recorded successfully",
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        data: result,
    });
}));
const getLastBananaAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.attendanceService.getLastBananaAttendance();
    (0, sendResponse_1.default)(res, {
        message: "Last banana attendance fetched successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
const getBananaAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.attendanceService.getBananaAttendance();
    (0, sendResponse_1.default)(res, {
        message: "banana attendance fetched successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
// create banruti attendance
const createBanrutiAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield attendance_service_1.attendanceService.createBanrutiAttendance(payload);
    (0, sendResponse_1.default)(res, {
        message: "Banruti attendance recorded successfully",
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        data: result,
    });
}));
const getLastBanrutiAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.attendanceService.getLastBanrutiAttendance();
    (0, sendResponse_1.default)(res, {
        message: "Last banruti attendance fetched successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
const getBanrutiAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.attendanceService.getBanrutiAttendance();
    (0, sendResponse_1.default)(res, {
        message: "Banruti attendance fetched successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
// egg attendance controller
const createEggAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield attendance_service_1.attendanceService.createEggAttendance(payload);
    (0, sendResponse_1.default)(res, {
        message: "Egg attendance recorded successfully",
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        data: result,
    });
}));
const getLastEggAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.attendanceService.getLastEggAttendance();
    (0, sendResponse_1.default)(res, {
        message: "Last egg attendance fetched successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
const getEggAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.attendanceService.getEggAttendance();
    (0, sendResponse_1.default)(res, {
        message: "Egg attendance fetched successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
const getAllLastAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.attendanceService.getAllLastAttendance(req.query.schoolId);
    (0, sendResponse_1.default)(res, {
        message: "All last attendance fetched successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
const getAllAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.attendanceService.getAllAttendance(req.query);
    (0, sendResponse_1.default)(res, {
        message: "All attendance fetched successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
// comment controller
const createComment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield attendance_service_1.attendanceService.createComment(payload);
    (0, sendResponse_1.default)(res, {
        message: "Comment added successfully",
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        data: result,
    });
}));
const getComments = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.attendanceService.getComments();
    (0, sendResponse_1.default)(res, {
        message: "Comments fetched successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
// delete attendance
const deleteAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params.id);
    const result = yield attendance_service_1.attendanceService.deleteAttendanceService(req.params.id);
    (0, sendResponse_1.default)(res, {
        message: "Delete Attendance Successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
const missing = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = attendance_service_1.attendanceService.missing();
    (0, sendResponse_1.default)(res, {
        message: "get missing attendance",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
exports.attendanceController = {
    createBananaAttendance,
    createBanrutiAttendance,
    createEggAttendance,
    createComment,
    getLastBananaAttendance,
    getLastBanrutiAttendance,
    getLastEggAttendance,
    getBananaAttendance,
    getBanrutiAttendance,
    getEggAttendance,
    getComments,
    getAllLastAttendance,
    getAllAttendance,
    deleteAttendance,
    missing,
};
