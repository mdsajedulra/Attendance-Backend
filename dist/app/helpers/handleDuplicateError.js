"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDuplicateError = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const http_status_codes_1 = require("http-status-codes");
const handleDuplicateError = (err) => {
    const errorSources = [
        {
            path: Object.keys(err.keyValue)[0],
            message: `${Object.values(err.keyValue)[0]} already exists`,
        },
    ];
    return {
        statusCode: http_status_codes_1.StatusCodes.CONFLICT,
        message: "Duplicate Field Error",
        errorSources,
    };
};
exports.handleDuplicateError = handleDuplicateError;
