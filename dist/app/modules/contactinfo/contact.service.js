"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactInfoService = void 0;
const contactInfo_model_1 = __importDefault(require("./contactInfo.model"));
const createContactInfo = (payload) => {
    const result = contactInfo_model_1.default.create(payload);
    return result;
};
exports.contactInfoService = {
    createContactInfo,
};
