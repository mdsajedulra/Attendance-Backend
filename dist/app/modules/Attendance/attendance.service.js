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
const spot_model_1 = __importDefault(require("../spot/spot.model"));
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
        spotId: payload.spotId instanceof mongoose_1.default.Types.ObjectId
            ? payload.spotId
            : new mongoose_1.default.Types.ObjectId(payload.spotId),
        createdAt: { $gte: todayStart, $lte: todayEnd },
    });
    if (existing) {
        throw new Error("আজ ইতিমধ্যেই আপনার স্কুলের তথ্য সাবমিট করা হয়েছে।");
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
        spotId: payload.spotId instanceof mongoose_1.default.Types.ObjectId
            ? payload.spotId
            : new mongoose_1.default.Types.ObjectId(payload.spotId),
        createdAt: { $gte: todayStart, $lte: todayEnd },
    });
    if (existing) {
        throw new Error("আজ ইতিমধ্যেই আপনার স্কুলের তথ্য সাবমিট করা হয়েছে।");
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
        spotId: payload.spotId instanceof mongoose_1.default.Types.ObjectId
            ? payload.spotId
            : new mongoose_1.default.Types.ObjectId(payload.spotId),
        createdAt: { $gte: todayStart, $lte: todayEnd },
    });
    if (existing) {
        throw new Error("আজ ইতিমধ্যেই আপনার স্কুলের তথ্য সাবমিট করা হয়েছে।");
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
const getAllAttendance = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // -----------------------------
    // 1️⃣ Build Spot Filters
    // -----------------------------
    const buildSpotFilter = (query) => {
        const filter = {};
        if (query.spotCode)
            filter.spotCode = query.spotCode;
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
    const spotFilter = buildSpotFilter(payload);
    // -----------------------------
    // 2️⃣ Find spots based on filter
    // -----------------------------
    const matchedSpots = yield spot_model_1.default.find(spotFilter);
    const spotIds = matchedSpots.map((s) => s._id);
    if (spotIds.length === 0 && Object.keys(spotFilter).length > 0) {
        return {
            success: true,
            message: "No spots found matching the criteria.",
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
        // Set a default date if no date filter is present (for missing spots logic)
        if (!dateFilter.createdAt) {
            targetDateString = new Date().toISOString().split("T")[0];
        }
        return { dateFilter, targetDateString };
    };
    const { dateFilter, targetDateString } = buildDateFilter();
    // -----------------------------
    // 4️⃣ Fetch female, male, child
    // -----------------------------
    const { attendanceType } = payload;
    let female = [];
    let male = [];
    let child = [];
    const baseQuery = Object.assign({ spotId: { $in: spotIds } }, dateFilter);
    const sortOption = { createdAt: "descending" };
    const fetchPromises = [];
    if (!attendanceType || attendanceType === "female") {
        fetchPromises.push(attendance_model_1.attendanceModel.femaleAttendance
            .find(baseQuery)
            .populate("spotId")
            .sort(sortOption));
    }
    else {
        fetchPromises.push(Promise.resolve([]));
    }
    if (!attendanceType || attendanceType === "male") {
        fetchPromises.push(attendance_model_1.attendanceModel.maleAttendance
            .find(baseQuery)
            .populate("spotId")
            .sort(sortOption));
    }
    else {
        fetchPromises.push(Promise.resolve([]));
    }
    if (!attendanceType || attendanceType === "child") {
        fetchPromises.push(attendance_model_1.attendanceModel.childAttendance
            .find(baseQuery)
            .populate("spotId")
            .sort(sortOption));
    }
    else {
        fetchPromises.push(Promise.resolve([]));
    }
    // Use Promise.all to fetch data concurrently
    [female, male, child] = (yield Promise.all(fetchPromises));
    // -----------------------------
    // 5️⃣ Merge all attendance
    // -----------------------------
    const all = [
        ...female.map((i) => (Object.assign(Object.assign({}, i.toObject()), { type: "female", count: i.female, recordId: i._id }))),
        ...male.map((i) => (Object.assign(Object.assign({}, i.toObject()), { type: "male", count: i.male, recordId: i._id }))),
        ...child.map((i) => (Object.assign(Object.assign({}, i.toObject()), { type: "child", count: i.child, recordId: i._id }))),
    ];
    // -----------------------------
    // 6️⃣ Grouping by date + spot (Aggregates the counts)
    // -----------------------------
    const grouped = {};
    all.forEach((item) => {
        var _a, _b, _c, _d;
        // Assuming item.createdAt is a Date object from Mongoose
        const date = item.createdAt.toISOString().split("T")[0];
        const spotObj = item.spotId;
        const key = `${date}-${spotObj._id.toString()}`;
        if (!grouped[key]) {
            grouped[key] = {
                date,
                spotId: spotObj._id.toString(),
                spotName: spotObj.spotName,
                spotCode: spotObj.spotCode,
                concernMobileNumber: spotObj.concernMobileNumber || null,
                address: {
                    village: ((_a = spotObj.address) === null || _a === void 0 ? void 0 : _a.village) || "",
                    union: ((_b = spotObj.address) === null || _b === void 0 ? void 0 : _b.union) || "",
                    upozila: ((_c = spotObj.address) === null || _c === void 0 ? void 0 : _c.upozila) || "",
                    district: ((_d = spotObj.address) === null || _d === void 0 ? void 0 : _d.district) || "",
                },
                female: 0,
                male: 0,
                child: 0,
                spotDetails: spotObj,
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
    const submittedSpotIds = Object.values(grouped).map((item) => item.spotId);
    // 7️⃣b. Master Spot List থেকে সেই স্পটগুলো খুঁজে বের করা, যারা কোনো ডেটাই জমা দেয়নি
    const completelyMissingSpots = matchedSpots.filter((spot) => !submittedSpotIds.includes(spot._id.toString()));
    // 7️⃣c. মিসিং স্পটগুলিকে final report-এর ফরম্যাটে তৈরি করা
    const missingSpotsData = completelyMissingSpots.map((spot) => {
        var _a, _b, _c, _d;
        return {
            // Use the determined single date string from step 3
            date: targetDateString,
            spotId: spot._id.toString(),
            spotName: spot.spotName,
            spotCode: spot.spotCode,
            concernMobileNumber: spot.concernMobileNumber || null,
            address: {
                village: ((_a = spot.address) === null || _a === void 0 ? void 0 : _a.village) || "",
                union: ((_b = spot.address) === null || _b === void 0 ? void 0 : _b.union) || "",
                upozila: ((_c = spot.address) === null || _c === void 0 ? void 0 : _c.upozila) || "",
                district: ((_d = spot.address) === null || _d === void 0 ? void 0 : _d.district) || "",
            },
            female: 0, // Missing means 0 count
            male: 0, // Missing means 0 count
            child: 0, // Missing means 0 count
            spotDetails: spot,
            attendanceIds: [],
            isMissing: true, // Key field to identify missing entries
        };
    });
    // -----------------------------
    // 8️⃣ Return final grouped output including missing spots
    // -----------------------------
    // চূড়ান্ত রিপোর্ট: জমা পড়া ডেটা + মিসিং স্পট ডেটা
    const finalData = [...Object.values(grouped), ...missingSpotsData];
    return {
        success: true,
        message: "All attendance and missing spots fetched successfully",
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
    const existFemale = yield attendance_model_1.attendanceModel.femaleAttendance.find({ _id: id });
    if (existFemale) {
        console.log("find something");
    }
    if (!existFemale) {
        console.log("kisui pailam na");
    }
    console.log(existFemale);
});
const missing = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield spot_model_1.default.find({ spotCode: "55" });
    const maleAttendance = yield attendance_model_1.attendanceModel.maleAttendance.find({ spotId: result[0]._id });
    console.log(maleAttendance);
    // console.log(result);
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
    getAllAttendance,
    deleteAttendanceService,
    missing,
};
