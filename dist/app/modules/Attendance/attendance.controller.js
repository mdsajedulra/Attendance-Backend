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
// female attendance controller
const createFemaleAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield attendance_service_1.attendanceService.createFemaleAttendance(payload);
    (0, sendResponse_1.default)(res, {
        message: "Female attendance recorded successfully",
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        data: result,
    });
}));
const getLastFemaleAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.attendanceService.getLastFemaleAttendance();
    (0, sendResponse_1.default)(res, {
        message: "Last female attendance fetched successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
const getFemaleAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.attendanceService.getFemaleAttendance();
    (0, sendResponse_1.default)(res, {
        message: "Female attendance fetched successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
// create male attendance
const createMaleAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield attendance_service_1.attendanceService.createMaleAttendance(payload);
    (0, sendResponse_1.default)(res, {
        message: "Male attendance recorded successfully",
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        data: result,
    });
}));
const getLastMaleAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.attendanceService.getLastMaleAttendance();
    (0, sendResponse_1.default)(res, {
        message: "Last male attendance fetched successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
const getMaleAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.attendanceService.getMaleAttendance();
    (0, sendResponse_1.default)(res, {
        message: "Male attendance fetched successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
// child attendance controller
const createChildAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield attendance_service_1.attendanceService.createChildAttendance(payload);
    (0, sendResponse_1.default)(res, {
        message: "Child attendance recorded successfully",
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        data: result,
    });
}));
const getLastChildAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.attendanceService.getLastChildAttendance();
    (0, sendResponse_1.default)(res, {
        message: "Last child attendance fetched successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
const getChildAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.attendanceService.getChildAttendance();
    (0, sendResponse_1.default)(res, {
        message: "Child attendance fetched successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
const getAllLastAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.attendanceService.getAllLastAttendance(req.query.spotId);
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
    createFemaleAttendance,
    createMaleAttendance,
    createChildAttendance,
    createComment,
    getLastFemaleAttendance,
    getLastMaleAttendance,
    getLastChildAttendance,
    getFemaleAttendance,
    getMaleAttendance,
    getChildAttendance,
    getComments,
    getAllLastAttendance,
    getAllAttendance,
    deleteAttendance,
    missing,
};
