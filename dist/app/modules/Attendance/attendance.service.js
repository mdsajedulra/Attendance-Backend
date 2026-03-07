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
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const attendance_model_1 = require("./attendance.model");
const school_model_1 = __importDefault(require("../school/school.model"));
// const createAttendance = async (payload: IAttendance) => {
//   const todayStart = new Date();
//   todayStart.setHours(0, 0, 0, 0);
//   const todayEnd = new Date();
//   todayEnd.setHours(23, 59, 59, 999);
//   const existing = await attendanceModel.findOne({
//     schoolId: new mongoose.Types.ObjectId(payload.schoolId),
//     createdAt: { $gte: todayStart, $lte: todayEnd },
//   });
//   if (existing) {
//     throw new Error("আজ ইতিমধ্যেই আপনার স্কুলের তথ্য সাবমিট করা হয়েছে।");
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
//     schoolId: new mongoose.Types.ObjectId(payload),
//     createdAt: { $gte: todayStart, $lte: todayEnd },
//   });
//   return existing;
// };
// get singl attendance
// const getSingleAttendance = async (payload: { schoolId: string }) => {
//   const attendances = await attendanceModel.findOne({
//     schoolId: new mongoose.Types.ObjectId(payload.schoolId),
//   });
//   return attendances;
// };
// post banana attendance
// banana attendance services
const createBananaAttendance = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const todayStart = (0, moment_timezone_1.default)().tz("Asia/Dhaka").startOf("day").toDate();
    const todayEnd = (0, moment_timezone_1.default)().tz("Asia/Dhaka").endOf("day").toDate();
    const existing = yield attendance_model_1.attendanceModel.BananaAttendance.findOne({
        schoolId: payload.schoolId instanceof mongoose_1.default.Types.ObjectId
            ? payload.schoolId
            : new mongoose_1.default.Types.ObjectId(payload.schoolId),
        createdAt: { $gte: todayStart, $lte: todayEnd },
    });
    if (existing) {
        throw new Error("আজ ইতিমধ্যেই আপনার স্কুলের তথ্য সাবমিট করা হয়েছে।");
    }
    const result = yield attendance_model_1.attendanceModel.BananaAttendance.create(payload);
    return result;
});
const getLastBananaAttendance = () => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    try {
        result = yield attendance_model_1.attendanceModel.BananaAttendance
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
const getBananaAttendance = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_model_1.attendanceModel.BananaAttendance.find();
    return result;
});
// create banruti attendance services
const createBanrutiAttendance = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const todayStart = (0, moment_timezone_1.default)().tz("Asia/Dhaka").startOf("day").toDate();
    const todayEnd = (0, moment_timezone_1.default)().tz("Asia/Dhaka").endOf("day").toDate();
    const existing = yield attendance_model_1.attendanceModel.banrutiAttendance.findOne({
        schoolId: payload.schoolId instanceof mongoose_1.default.Types.ObjectId
            ? payload.schoolId
            : new mongoose_1.default.Types.ObjectId(payload.schoolId),
        createdAt: { $gte: todayStart, $lte: todayEnd },
    });
    if (existing) {
        throw new Error("আজ ইতিমধ্যেই আপনার স্কুলের তথ্য সাবমিট করা হয়েছে।");
    }
    const result = yield attendance_model_1.attendanceModel.banrutiAttendance.create(payload);
    return result;
});
const getLastBanrutiAttendance = () => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    try {
        result = yield attendance_model_1.attendanceModel.banrutiAttendance
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
const getBanrutiAttendance = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_model_1.attendanceModel.banrutiAttendance.find();
    return result;
});
// create egg attendance services
const createEggAttendance = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const todayStart = (0, moment_timezone_1.default)().tz("Asia/Dhaka").startOf("day").toDate();
    const todayEnd = (0, moment_timezone_1.default)().tz("Asia/Dhaka").endOf("day").toDate();
    const existing = yield attendance_model_1.attendanceModel.eggAttendance.findOne({
        schoolId: payload.schoolId instanceof mongoose_1.default.Types.ObjectId
            ? payload.schoolId
            : new mongoose_1.default.Types.ObjectId(payload.schoolId),
        createdAt: { $gte: todayStart, $lte: todayEnd },
    });
    if (existing) {
        throw new Error("আজ ইতিমধ্যেই আপনার স্কুলের তথ্য সাবমিট করা হয়েছে।");
    }
    const result = yield attendance_model_1.attendanceModel.eggAttendance.create(payload);
    return result;
});
const getLastEggAttendance = () => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    try {
        result = yield attendance_model_1.attendanceModel.eggAttendance
            .findOne()
            .sort({ createdAt: -1 });
    }
    catch (error) {
        console.error("Error fetching last entry:", error);
    }
    return result;
});
const getEggAttendance = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_model_1.attendanceModel.eggAttendance.find();
    return result;
});
const getAllLastAttendance = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    const lastBanana = yield attendance_model_1.attendanceModel.BananaAttendance
        .findOne({ schoolId: payload })
        .sort({ createdAt: -1 });
    const lastBanruti = yield attendance_model_1.attendanceModel.banrutiAttendance
        .findOne({ schoolId: payload })
        .sort({ createdAt: -1 });
    const lastEgg = yield attendance_model_1.attendanceModel.eggAttendance
        .findOne({ schoolId: payload })
        .sort({ createdAt: -1 });
    return [{ lastBanana: lastBanana, lastBanruti: lastBanruti, lastEgg: lastEgg }];
});
const getAllAttendance = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // -----------------------------
    // 1️⃣ Build School Filters
    // -----------------------------
    const buildSchoolFilter = (query) => {
        const filter = {};
        if (query.schoolCode)
            filter.schoolCode = query.schoolCode;
        if (query.concernMobileNumber)
            filter.concernMobileNumber = query.concernMobileNumber;
        if (query.village)
            filter["address.village"] = query.village;
        if (query.union)
            filter["address.union"] = query.union;
        if (query.upozila)
            filter["address.upozila"] = query.upozila;
        if (query.district)
            filter["address.district"] = query.district;
        return filter;
    };
    const schoolFilter = buildSchoolFilter(payload);
    // -----------------------------
    // 2️⃣ Find schools based on filter
    // -----------------------------
    const matchedSchools = yield school_model_1.default.find(schoolFilter);
    const schoolIds = matchedSchools.map((s) => s._id);
    if (schoolIds.length === 0 && Object.keys(schoolFilter).length > 0) {
        return {
            success: true,
            message: "No schools found matching the criteria.",
            data: [],
        };
    }
    // -----------------------------
    // 3️⃣ Build Date Filter
    // -----------------------------
    const buildDateFilter = () => {
        const dateFilter = {};
        let targetDateString;
        // Filter by single date
        if (payload.date) {
            const start = new Date(payload.date);
            const end = new Date(payload.date);
            end.setHours(23, 59, 59, 999);
            dateFilter.createdAt = { $gte: start, $lte: end };
            targetDateString = payload.date.split("T")[0];
        }
        // Filter by date range
        if (payload.startDate && payload.endDate) {
            const start = new Date(payload.startDate);
            const end = new Date(payload.endDate);
            end.setHours(23, 59, 59, 999);
            dateFilter.createdAt = {
                $gte: start,
                $lte: end,
            };
            // For range, we might not have a single 'missing' date, but we use the start date as the representative
            if (!targetDateString) {
                targetDateString = payload.startDate.split("T")[0];
            }
        }
        // Set a default date if no date filter is present (for missing schools logic)
        if (!dateFilter.createdAt) {
            targetDateString = new Date().toISOString().split("T")[0];
        }
        return { dateFilter, targetDateString };
    };
    const { dateFilter, targetDateString } = buildDateFilter();
    // -----------------------------
    // 4️⃣ Fetch banana, banruti, egg
    // -----------------------------
    const { attendanceType } = payload;
    let banana = [];
    let banruti = [];
    let egg = [];
    const baseQuery = Object.assign({ schoolId: { $in: schoolIds } }, dateFilter);
    const sortOption = { createdAt: "descending" };
    const fetchPromises = [];
    if (!attendanceType || attendanceType === "banana") {
        fetchPromises.push(attendance_model_1.attendanceModel.BananaAttendance
            .find(baseQuery)
            .populate("schoolId")
            .sort(sortOption));
    }
    else {
        fetchPromises.push(Promise.resolve([]));
    }
    if (!attendanceType || attendanceType === "banruti") {
        fetchPromises.push(attendance_model_1.attendanceModel.banrutiAttendance
            .find(baseQuery)
            .populate("schoolId")
            .sort(sortOption));
    }
    else {
        fetchPromises.push(Promise.resolve([]));
    }
    if (!attendanceType || attendanceType === "egg") {
        fetchPromises.push(attendance_model_1.attendanceModel.eggAttendance
            .find(baseQuery)
            .populate("schoolId")
            .sort(sortOption));
    }
    else {
        fetchPromises.push(Promise.resolve([]));
    }
    // Use Promise.all to fetch data concurrently
    [banana, banruti, egg] = (yield Promise.all(fetchPromises));
    // -----------------------------
    // 5️⃣ Merge all attendance
    // -----------------------------
    const all = [
        ...banana.map((i) => (Object.assign(Object.assign({}, i.toObject()), { type: "banana", count: i.banana, recordId: i._id }))),
        ...banruti.map((i) => (Object.assign(Object.assign({}, i.toObject()), { type: "banruti", count: i.banruti, recordId: i._id }))),
        ...egg.map((i) => (Object.assign(Object.assign({}, i.toObject()), { type: "egg", count: i.egg, recordId: i._id }))),
    ];
    // -----------------------------
    // 6️⃣ Grouping by date + school (Aggregates the counts)
    // -----------------------------
    const grouped = {};
    all.forEach((item) => {
        var _a, _b, _c, _d;
        // Assuming item.createdAt is a Date object from Mongoose
        const date = item.createdAt.toISOString().split("T")[0];
        const schoolObj = item.schoolId;
        const key = `${date}-${schoolObj._id.toString()}`;
        if (!grouped[key]) {
            grouped[key] = {
                date,
                schoolId: schoolObj._id.toString(),
                schoolName: schoolObj.schoolName,
                schoolCode: schoolObj.schoolCode,
                concernMobileNumber: schoolObj.concernMobileNumber || null,
                address: {
                    village: ((_a = schoolObj.address) === null || _a === void 0 ? void 0 : _a.village) || "",
                    union: ((_b = schoolObj.address) === null || _b === void 0 ? void 0 : _b.union) || "",
                    upozila: ((_c = schoolObj.address) === null || _c === void 0 ? void 0 : _c.upozila) || "",
                    district: ((_d = schoolObj.address) === null || _d === void 0 ? void 0 : _d.district) || "",
                },
                banana: 0,
                banruti: 0,
                egg: 0,
                schoolDetails: schoolObj,
                attendanceIds: [],
                isMissing: false, // Default to false
            };
        }
        // Accumulate the count for the correct type
        grouped[key][item.type] += item.count;
        grouped[key].attendanceIds.push(item.recordId);
    });
    // ----------------------------------------------------
    // ✅ NEW STEP 7: IDENTIFY AND ADD COMPLETELY MISSING SPOTS
    // ----------------------------------------------------
    // 7️⃣a. ওই দিনের জন্য যে সমস্ত স্পট অ্যাটেনডেন্স জমা দিয়েছে তাদের ID গুলি বের করা
    const submittedSchoolIds = Object.values(grouped).map((item) => item.schoolId);
    // 7️⃣b. Master School List থেকে সেই স্পটগুলো খুঁজে বের করা, যারা কোনো ডেটাই জমা দেয়নি
    const completelyMissingSchools = matchedSchools.filter((school) => !submittedSchoolIds.includes(school._id.toString()));
    // 7️⃣c. মিসিং স্পটগুলিকে final report-এর ফরম্যাটে তৈরি করা
    const missingSchoolsData = completelyMissingSchools.map((school) => {
        var _a, _b, _c, _d;
        return {
            // Use the determined single date string from step 3
            date: targetDateString,
            schoolId: school._id.toString(),
            schoolName: school.schoolName,
            schoolCode: school.schoolCode,
            concernMobileNumber: school.concernMobileNumber || null,
            address: {
                village: ((_a = school.address) === null || _a === void 0 ? void 0 : _a.village) || "",
                union: ((_b = school.address) === null || _b === void 0 ? void 0 : _b.union) || "",
                upozila: ((_c = school.address) === null || _c === void 0 ? void 0 : _c.upozila) || "",
                district: ((_d = school.address) === null || _d === void 0 ? void 0 : _d.district) || "",
            },
            banana: 0, // Missing means 0 count
            banruti: 0, // Missing means 0 count
            egg: 0, // Missing means 0 count
            schoolDetails: school,
            attendanceIds: [],
            isMissing: true, // Key field to identify missing entries
        };
    });
    // -----------------------------
    // 8️⃣ Return final grouped output including missing schools
    // -----------------------------
    // চূড়ান্ত রিপোর্ট: জমা পড়া ডেটা + মিসিং স্পট ডেটা
    const finalData = [...Object.values(grouped), ...missingSchoolsData];
    return {
        success: true,
        message: "All attendance and missing schools fetched successfully",
        data: finalData,
    };
});
// create comment service
function createComment(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield attendance_model_1.attendanceModel.commentModel;
        return result;
    });
}
const getComments = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_model_1.attendanceModel.commentModel.find();
    return result;
});
const deleteAttendanceService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const existBanana = yield attendance_model_1.attendanceModel.BananaAttendance.find({ _id: id });
    if (existBanana) {
        console.log("find something");
    }
    if (!existBanana) {
        console.log("kisui pailam na");
    }
    console.log(existBanana);
});
const missing = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield school_model_1.default.find({ schoolCode: "55" });
    const banrutiAttendance = yield attendance_model_1.attendanceModel.banrutiAttendance.find({ schoolId: result[0]._id });
    console.log(banrutiAttendance);
    // console.log(result);
});
exports.attendanceService = {
    createBananaAttendance,
    createBanrutiAttendance,
    createEggAttendance,
    createComment,
    getLastBananaAttendance,
    getLastBanrutiAttendance,
    getLastEggAttendance,
    getBananaAttendance,
    getBanrutiAttendance,
    getEggAttendance,
    getComments,
    getAllLastAttendance,
    getAllAttendance,
    deleteAttendanceService,
    missing,
};
