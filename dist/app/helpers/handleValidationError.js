"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationError = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const http_status_codes_1 = require("http-status-codes");
const handleValidationError = (err) => {
    const errorSources = Object.values(err.errors).map((error) => {
        return {
            path: error === null || error === void 0 ? void 0 : error.path,
            message: error === null || error === void 0 ? void 0 : error.message,
        };
    });
    return {
        statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST,
        message: "Validation Error",
        errorSources,
    };
};
exports.handleValidationError = handleValidationError;
