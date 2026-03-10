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
exports.contactInfoService = void 0;
const contactInfo_model_1 = __importDefault(require("./contactInfo.model"));
const createContactInfo = (payload) => {
    const result = contactInfo_model_1.default.create(payload);
    return result;
};
const getContactInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contactInfo_model_1.default.find();
    return result;
});
const updateContactInfo = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contactInfo_model_1.default.findByIdAndUpdate("69ad2c601c7bdf3060faaf8e", payload, { new: true });
    return result;
});
exports.contactInfoService = {
    createContactInfo,
    getContactInfo,
    updateContactInfo,
};
