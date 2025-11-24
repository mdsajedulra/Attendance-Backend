"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidation = void 0;
const zod_1 = require("zod");
const loginValidationSchema = zod_1.z.object({
    email: zod_1.z.string().nonempty("Email is required").email("Invalid email format"),
    password: zod_1.z.string().nonempty("Password is required"),
});
const changePasswordValidationSchema = zod_1.z.object({
    oldPassword: zod_1.z.string().nonempty("Old password is required"),
    newPassword: zod_1.z.string().nonempty("New password is required"),
});
exports.authValidation = {
    loginValidationSchema,
    changePasswordValidationSchema,
};
