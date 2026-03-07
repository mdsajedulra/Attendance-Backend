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
exports.schoolController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const school_service_1 = require("./school.service");
const createSchool = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield school_service_1.schoolService.createSchool(payload);
    (0, sendResponse_1.default)(res, {
        message: "School created Successfully",
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        data: result,
    });
}));
// school login
const schoolLogin = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    // console.log(payload);
    const result = yield school_service_1.schoolService.schoolLogin(payload);
    (0, sendResponse_1.default)(res, {
        message: "School logged in Successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
// get all school
const getAllSchool = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield school_service_1.schoolService.getAllSchool();
    (0, sendResponse_1.default)(res, {
        message: "school get successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
exports.schoolController = {
    createSchool,
    schoolLogin,
    getAllSchool,
};
