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
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const attendance_model_1 = require("./attendance.model");
// reform and redesign
const createAttendance = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const startOfDay = (0, moment_timezone_1.default)().tz("Asia/Dhaka").startOf("day").toDate();
    const endOfDay = (0, moment_timezone_1.default)().tz("Asia/Dhaka").endOf("day").toDate();
    const existing = yield attendance_model_1.Attendance.findOne({
        schoolId: payload.schoolId,
        createdAt: { $gte: startOfDay, $lte: endOfDay },
    });
    if (payload.banana && ((_a = existing === null || existing === void 0 ? void 0 : existing.banana) === null || _a === void 0 ? void 0 : _a.submittedAt)) {
        throw new Error("আজ ইতিমধ্যেই Banana submit করা হয়েছে");
    }
    if (payload.banruti && ((_b = existing === null || existing === void 0 ? void 0 : existing.banruti) === null || _b === void 0 ? void 0 : _b.submittedAt)) {
        throw new Error("আজ ইতিমধ্যেই Banruti submit করা হয়েছে");
    }
    if (payload.egg && ((_c = existing === null || existing === void 0 ? void 0 : existing.egg) === null || _c === void 0 ? void 0 : _c.submittedAt)) {
        throw new Error("আজ ইতিমধ্যেই Egg submit করা হয়েছে");
    }
    const result = yield attendance_model_1.Attendance.findOneAndUpdate({
        schoolId: payload.schoolId,
        createdAt: { $gte: startOfDay, $lte: endOfDay },
    }, { $set: payload }, { upsert: true, new: true });
    return result;
});
// get last attendance
const getLastAttendance = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_model_1.Attendance.findOne({ schoolId: id }).sort({
        createdAt: -1,
    });
    console.log(result);
    return result;
});
// console.log(payload);
// const result = await Attendance.find({
//   schoolId: new mongoose.Types.ObjectId(payload.schoolId),
//   createdAt: { $gte: payload.date, $lte: payload.date },
// });
const getAttendance = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { type, schoolName, schoolCode, mobile, district, upozila, union, village, date, startDate, endDate, } = query;
    console.log(query.district);
    const filter = {};
    const schoolFilter = {};
    // attendance type filter
    if (type) {
        filter[`${type}.count`] = { $exists: true };
    }
    // date filter
    if (date) {
        const start = new Date(date);
        start.setHours(0, 0, 0, 0);
        const end = new Date(date);
        end.setHours(23, 59, 59, 999);
        filter.date = { $gte: start, $lte: end };
    }
    // date range
    if (startDate && endDate) {
        filter.date = {
            $gte: new Date(startDate),
            $lte: new Date(endDate),
        };
    }
    // school filters
    if (schoolName) {
        schoolFilter.schoolName = { $regex: schoolName, $options: "i" };
    }
    if (schoolCode) {
        schoolFilter.schoolCode = schoolCode;
    }
    if (mobile) {
        schoolFilter.concernMobileNumber = { $regex: mobile };
    }
    if (district) {
        schoolFilter["address.district"] = { $regex: district, $options: "i" };
    }
    if (upozila) {
        schoolFilter["address.upozila"] = { $regex: upozila, $options: "i" };
    }
    if (union) {
        schoolFilter["address.union"] = { $regex: union, $options: "i" };
    }
    if (village) {
        schoolFilter["address.village"] = { $regex: village, $options: "i" };
    }
    // console.log(schoolFilter);
    const result = yield attendance_model_1.Attendance.find(filter)
        .populate({
        path: "schoolId",
        match: schoolFilter,
    })
        .lean();
    console.log(result);
    // remove unmatched populate
    const filtered = result.filter((a) => a.schoolId !== null);
    return filtered;
});
// get attendance report
const getAreaReport = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const match = {};
    if (query.startDate && query.endDate) {
        match.date = {
            $gte: new Date(query.startDate),
            $lte: new Date(query.endDate),
        };
    }
    const pipeline = [
        {
            $match: match,
        },
        {
            $lookup: {
                from: "schools",
                localField: "schoolId",
                foreignField: "_id",
                as: "school",
            },
        },
        { $unwind: "$school" },
        {
            $match: Object.assign(Object.assign(Object.assign(Object.assign({}, (query.district && { "school.address.district": query.district })), (query.upozila && { "school.address.upozila": query.upozila })), (query.union && { "school.address.union": query.union })), (query.village && { "school.address.village": query.village })),
        },
        {
            $group: {
                _id: "$school._id",
                schoolName: { $first: "$school.schoolName" },
                mobile: { $first: "$school.concernMobileNumber" },
                district: { $first: "$school.address.district" },
                upozila: { $first: "$school.address.upozila" },
                totalStudents: { $first: "$school.totalEmployees" },
                banana: { $sum: "$banana.count" },
                banruti: { $sum: "$banruti.count" },
                egg: { $sum: "$egg.count" },
            },
        },
        {
            $sort: {
                schoolName: 1,
            },
        },
    ];
    const result = yield attendance_model_1.Attendance.aggregate(pipeline);
    return result;
});
// sajed
// create comment service
function createComment(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield attendance_model_1.attendanceModel.commentModel.create(payload);
        return result;
    });
}
const getComments = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_model_1.attendanceModel.commentModel.find();
    return result;
});
const deleteAttendanceService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existBanana = yield attendance_model_1.Attendance.deleteOne({ _id: id });
});
exports.attendanceService = {
    createComment,
    getComments,
    deleteAttendanceService,
    createAttendance,
    getLastAttendance,
    getAttendance,
    getAreaReport,
};
