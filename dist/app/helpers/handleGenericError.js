"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGenericError = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const http_status_codes_1 = require("http-status-codes");
const handleGenericError = (err) => {
    const errorSources = [
        {
            path: "",
            message: err.message,
        },
    ];
    return {
        statusCode: http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message || "Something went wrong",
        errorSources,
    };
};
exports.handleGenericError = handleGenericError;
