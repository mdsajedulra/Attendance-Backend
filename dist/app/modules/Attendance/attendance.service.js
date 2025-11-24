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
exports.attendanceService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const attendance_model_1 = require("./attendance.model");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
// const createAttendance = async (payload: IAttendance) => {
//   const todayStart = new Date();
//   todayStart.setHours(0, 0, 0, 0);
//   const todayEnd = new Date();
//   todayEnd.setHours(23, 59, 59, 999);
//   const existing = await attendanceModel.findOne({
//     spotId: new mongoose.Types.ObjectId(payload.spotId),
//     createdAt: { $gte: todayStart, $lte: todayEnd },
//   });
//   if (existing) {
//     throw new Error("আজ ইতিমধ্যেই এই স্পটে অ্যাটেনডেন্স সাবমিট করা হয়েছে।");
//   }
//   const result = await attendanceModel.create(payload);
//   console.log(result);
//   return { result, todayStart, todayEnd };
// };
// const getCurrentEntry = async (payload: string) => {
//   const todayStart = new Date();
//   todayStart.setHours(0, 0, 0, 0);
//   const todayEnd = new Date();
//   todayEnd.setHours(23, 59, 59, 999);
//   const existing = await attendanceModel.findOne({
//     spotId: new mongoose.Types.ObjectId(payload),
//     createdAt: { $gte: todayStart, $lte: todayEnd },
//   });
//   return existing;
// };
// get singl attendance
// const getSingleAttendance = async (payload: { spotId: string }) => {
//   const attendances = await attendanceModel.findOne({
//     spotId: new mongoose.Types.ObjectId(payload.spotId),
//   });
//   return attendances;
// };
// post female attendance
// female attendance services
const createFemaleAttendance = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const todayStart = (0, moment_timezone_1.default)().tz("Asia/Dhaka").startOf("day").toDate();
    const todayEnd = (0, moment_timezone_1.default)().tz("Asia/Dhaka").endOf("day").toDate();
    const existing = yield attendance_model_1.attendanceModel.femaleAttendance.findOne({
        spotId: new mongoose_1.default.Types.ObjectId(payload.spotId),
        createdAt: { $gte: todayStart, $lte: todayEnd },
    });
    if (existing) {
        throw new Error("আজ ইতিমধ্যেই এই স্পটে অ্যাটেনডেন্স সাবমিট করা হয়েছে।");
    }
    const result = yield attendance_model_1.attendanceModel.femaleAttendance.create(payload);
    return result;
});
const getLastFemaleAttendance = () => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    try {
        result = yield attendance_model_1.attendanceModel.femaleAttendance
            .findOne()
            .sort({ createdAt: -1 });
        if (result) {
            console.log("Last entry found:", result);
        }
        else {
            console.log("No entries found in the collection.");
        }
    }
    catch (error) {
        console.error("Error fetching last entry:", error);
    }
    return result;
});
const getFemaleAttendance = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_model_1.attendanceModel.femaleAttendance.find();
    return result;
});
// create male attendance services
const createMaleAttendance = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const todayStart = (0, moment_timezone_1.default)().tz("Asia/Dhaka").startOf("day").toDate();
    const todayEnd = (0, moment_timezone_1.default)().tz("Asia/Dhaka").endOf("day").toDate();
    const existing = yield attendance_model_1.attendanceModel.maleAttendance.findOne({
        spotId: new mongoose_1.default.Types.ObjectId(payload.spotId),
        createdAt: { $gte: todayStart, $lte: todayEnd },
    });
    if (existing) {
        throw new Error("আজ ইতিমধ্যেই এই স্পটে অ্যাটেনডেন্স সাবমিট করা হয়েছে।");
    }
    const result = yield attendance_model_1.attendanceModel.maleAttendance.create(payload);
    return result;
});
const getLastMaleAttendance = () => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    try {
        result = yield attendance_model_1.attendanceModel.maleAttendance
            .findOne()
            .sort({ createdAt: -1 });
        if (result) {
            console.log("Last entry found:", result);
        }
        else {
            console.log("No entries found in the collection.");
        }
    }
    catch (error) {
        console.error("Error fetching last entry:", error);
    }
    return result;
});
const getMaleAttendance = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_model_1.attendanceModel.maleAttendance.find();
    return result;
});
// create child attendance services
const createChildAttendance = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const todayStart = (0, moment_timezone_1.default)().tz("Asia/Dhaka").startOf("day").toDate();
    const todayEnd = (0, moment_timezone_1.default)().tz("Asia/Dhaka").endOf("day").toDate();
    const existing = yield attendance_model_1.attendanceModel.childAttendance.findOne({
        spotId: new mongoose_1.default.Types.ObjectId(payload.spotId),
        createdAt: { $gte: todayStart, $lte: todayEnd },
    });
    if (existing) {
        throw new Error("আজ ইতিমধ্যেই এই স্পটে অ্যাটেনডেন্স সাবমিট করা হয়েছে।");
    }
    const result = yield attendance_model_1.attendanceModel.childAttendance.create(payload);
    return result;
});
const getLastChildAttendance = () => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    try {
        result = yield attendance_model_1.attendanceModel.childAttendance
            .findOne()
            .sort({ createdAt: -1 });
    }
    catch (error) {
        console.error("Error fetching last entry:", error);
    }
    return result;
});
const getChildAttendance = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_model_1.attendanceModel.childAttendance.find();
    return result;
});
const getAllLastAttendance = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    const lastFemale = yield attendance_model_1.attendanceModel.femaleAttendance
        .findOne({ spotId: payload })
        .sort({ createdAt: -1 });
    const lastMale = yield attendance_model_1.attendanceModel.maleAttendance
        .findOne({ spotId: payload })
        .sort({ createdAt: -1 });
    const lastChild = yield attendance_model_1.attendanceModel.childAttendance
        .findOne({ spotId: payload })
        .sort({ createdAt: -1 });
    return [{ lastFemale: lastFemale, lastMale: lastMale, lastChild: lastChild }];
});
// create comment service
const createComment = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_model_1.attendanceModel.commentModel.create(payload);
    return result;
});
const getComments = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_model_1.attendanceModel.commentModel.find();
    return result;
});
exports.attendanceService = {
    createFemaleAttendance,
    createMaleAttendance,
    createChildAttendance,
    createComment,
    getLastFemaleAttendance,
    getLastMaleAttendance,
    getLastChildAttendance,
    getFemaleAttendance,
    getMaleAttendance,
    getChildAttendance,
    getComments,
    getAllLastAttendance,
};
