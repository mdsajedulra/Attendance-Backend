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
// reform and redesign
const createAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield attendance_service_1.attendanceService.createAttendance(payload);
    (0, sendResponse_1.default)(res, {
        message: "Attendance recorded successfully",
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        data: result,
    });
}));
const getAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.attendanceService.getAttendance(req.query);
    (0, sendResponse_1.default)(res, {
        message: "Attendance fetched successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
// get report
const getAttendanceReport = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.attendanceService.getAreaReport(req.query);
    (0, sendResponse_1.default)(res, {
        message: "Attendance report fetched successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
const getLastAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.query.schoolId);
    const result = yield attendance_service_1.attendanceService.getLastAttendance(req.query.schoolId);
    (0, sendResponse_1.default)(res, {
        message: "Last attendance fetched successfully",
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
const getComment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.attendanceService.getComments();
    (0, sendResponse_1.default)(res, {
        message: "Comment added successfully",
        statusCode: http_status_codes_1.StatusCodes.CREATED,
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
// get missing attendance 
const getMissing = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.attendanceService.getMissing(req.query);
    (0, sendResponse_1.default)(res, {
        message: "Missing get Successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
// update comment
const updateComment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield attendance_service_1.attendanceService.updateComment((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
    (0, sendResponse_1.default)(res, {
        message: "Update Comment Successfully",
        statusCode: http_status_codes_1.StatusCodes.ACCEPTED,
        success: true,
        data: result,
    });
}));
// get single comment 
const getSingleComment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield attendance_service_1.attendanceService.getSingleComment((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
    (0, sendResponse_1.default)(res, {
        message: "single Comment get Successfully",
        statusCode: http_status_codes_1.StatusCodes.ACCEPTED,
        success: true,
        data: result,
    });
}));
exports.attendanceController = {
    deleteAttendance,
    createComment,
    getComment,
    createAttendance,
    getLastAttendance,
    getAttendance,
    getAttendanceReport,
    getMissing,
    updateComment,
    getSingleComment
};
