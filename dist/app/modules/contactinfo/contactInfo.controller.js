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
exports.contactInfoController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const contact_service_1 = require("./contact.service");
const createContactInfo = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield contact_service_1.contactInfoService.createContactInfo(payload);
    (0, sendResponse_1.default)(res, {
        message: "Contact info created Successfully",
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        data: result,
    });
}));
// get contact info
const getContactInfo = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_service_1.contactInfoService.getContactInfo();
    (0, sendResponse_1.default)(res, {
        message: "Contact info fetched Successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
// update contact info
const updateContactInfo = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield contact_service_1.contactInfoService.updateContactInfo(payload);
    (0, sendResponse_1.default)(res, {
        message: "Contact info updated Successfully",
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        data: result,
    });
}));
exports.contactInfoController = {
    createContactInfo,
    getContactInfo,
    updateContactInfo
};
