"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCastError = void 0;
const handleCastError = (err) => {
    return {
        statusCode: 400,
        message: "Invalid ID",
        errorSources: [
            {
                path: err.path,
                message: err.message,
            },
        ],
    };
};
exports.handleCastError = handleCastError;
