"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formattedErrors = void 0;
const formattedErrors = (err) => {
    err.map((issue) => ({
        field: issue.path.join("."), // name / email / password
        message: issue.message, // readable message
    }));
};
exports.formattedErrors = formattedErrors;
