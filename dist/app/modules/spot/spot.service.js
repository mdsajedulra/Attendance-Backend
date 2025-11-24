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
exports.spotService = void 0;
const spot_model_1 = __importDefault(require("./spot.model"));
const createSpot = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield spot_model_1.default.create(payload);
    return result;
});
const spotLogin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    const spot = yield spot_model_1.default.find({
        spotCode: payload.spotCode,
    });
    if (spot.length === 0) {
        throw new Error("Spot Not Found");
    }
    if (spot[0].password !== payload.password) {
        throw new Error("Invalid Password");
    }
    console.log(spot);
    return spot[0];
});
exports.spotService = {
    createSpot,
    spotLogin,
};
