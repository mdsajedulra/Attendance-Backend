import mongoose, { Model, ObjectId, Types } from "mongoose";

import moment from "moment-timezone";

import { IComment } from "./attendance.interface";
import { attendanceModel } from "./attendance.model";
import schoolModel from "../school/school.model";


// sajed

interface IAddress {
  village?: string;
  union?: string;
  upozila?: string;
  district?: string;
}

// School Document Interface
interface ISchool extends Document {
  _id: Types.ObjectId;
  schoolName: string;
  schoolCode: string;
  concernMobileNumber?: string;
  address?: IAddress;
  // Add other fields as needed
}

// Base Attendance Document Interface
interface IAttendanceBase extends Document {
  _id: Types.ObjectId;
  schoolId: ISchool; // Populated School Document
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

// Specific Attendance Interfaces
interface IBananaAttendance extends IAttendanceBase {
  toObject(): any;
  banana: number;
}
interface IBanrutiAttendance extends IAttendanceBase {
  toObject(): any;
  banruti: number;
}
interface IEggAttendance extends IAttendanceBase {
  toObject(): any;
  egg: number;
}

// Placeholder for Mongoose Models
// Replace these with your actual imported models

// Input Payload Interface
interface IPayload {
  schoolCode?: string;
  concernMobileNumber?: string;
  village?: string;
  union?: string;
  upozila?: string;
  district?: string;
  date?: string; // Single date 'YYYY-MM-DD'
  startDate?: string;
  endDate?: string;
  attendanceType?: "banana" | "banruti" | "egg";
}

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
const createBananaAttendance = async (payload: IBananaAttendance) => {
  const todayStart = moment().tz("Asia/Dhaka").startOf("day").toDate();
  const todayEnd = moment().tz("Asia/Dhaka").endOf("day").toDate();
  const existing = await attendanceModel.BananaAttendance.findOne({
    schoolId:
      payload.schoolId instanceof mongoose.Types.ObjectId
        ? payload.schoolId
        : new mongoose.Types.ObjectId(payload.schoolId as any),
    createdAt: { $gte: todayStart, $lte: todayEnd },
  });
  if (existing) {
    throw new Error("আজ ইতিমধ্যেই আপনার স্কুলের তথ্য সাবমিট করা হয়েছে।");
  }
  const result = await attendanceModel.BananaAttendance.create(payload);
  return result;
};

const getLastBananaAttendance = async () => {
  let result;
  try {
    result = await attendanceModel.BananaAttendance
      .findOne()
      .sort({ createdAt: -1 });

    if (result) {
      console.log("Last entry found:", result);
    } else {
      console.log("No entries found in the collection.");
    }
  } catch (error) {
    console.error("Error fetching last entry:", error);
  }
  return result;
};

const getBananaAttendance = async () => {
  const result = await attendanceModel.BananaAttendance.find();
  return result;
};
// create banruti attendance services

const createBanrutiAttendance = async (payload: IBananaAttendance) => {
  const todayStart = moment().tz("Asia/Dhaka").startOf("day").toDate();
  const todayEnd = moment().tz("Asia/Dhaka").endOf("day").toDate();
  const existing = await attendanceModel.banrutiAttendance.findOne({
    schoolId:
      payload.schoolId instanceof mongoose.Types.ObjectId
        ? payload.schoolId
        : new mongoose.Types.ObjectId(payload.schoolId as any),
    createdAt: { $gte: todayStart, $lte: todayEnd },
  });
  if (existing) {
    throw new Error("আজ ইতিমধ্যেই আপনার স্কুলের তথ্য সাবমিট করা হয়েছে।");
  }
  const result = await attendanceModel.banrutiAttendance.create(payload);
  return result;
};

const getLastBanrutiAttendance = async () => {
  let result;
  try {
    result = await attendanceModel.banrutiAttendance
      .findOne()
      .sort({ createdAt: -1 });

    if (result) {
      console.log("Last entry found:", result);
    } else {
      console.log("No entries found in the collection.");
    }
  } catch (error) {
    console.error("Error fetching last entry:", error);
  }
  return result;
};

const getBanrutiAttendance = async () => {
  const result = await attendanceModel.banrutiAttendance.find();
  return result;
};
// create egg attendance services

const createEggAttendance = async (payload: IBananaAttendance) => {
  const todayStart = moment().tz("Asia/Dhaka").startOf("day").toDate();
  const todayEnd = moment().tz("Asia/Dhaka").endOf("day").toDate();
  const existing = await attendanceModel.eggAttendance.findOne({
    schoolId:
      payload.schoolId instanceof mongoose.Types.ObjectId
        ? payload.schoolId
        : new mongoose.Types.ObjectId(payload.schoolId as any),
    createdAt: { $gte: todayStart, $lte: todayEnd },
  });
  if (existing) {
    throw new Error("আজ ইতিমধ্যেই আপনার স্কুলের তথ্য সাবমিট করা হয়েছে।");
  }
  const result = await attendanceModel.eggAttendance.create(payload);
  return result;
};
const getLastEggAttendance = async () => {
  let result;
  try {
    result = await attendanceModel.eggAttendance
      .findOne()
      .sort({ createdAt: -1 });
  } catch (error) {
    console.error("Error fetching last entry:", error);
  }
  return result;
};

const getEggAttendance = async () => {
  const result = await attendanceModel.eggAttendance.find();
  return result;
};

const getAllLastAttendance = async (payload: ObjectId) => {
  console.log(payload);
  const lastBanana = await attendanceModel.BananaAttendance
    .findOne({ schoolId: payload })
    .sort({ createdAt: -1 });
  const lastBanruti = await attendanceModel.banrutiAttendance
    .findOne({ schoolId: payload })
    .sort({ createdAt: -1 });
  const lastEgg = await attendanceModel.eggAttendance
    .findOne({ schoolId: payload })
    .sort({ createdAt: -1 });

  return [{ lastBanana: lastBanana, lastBanruti: lastBanruti, lastEgg: lastEgg }];
};
const getAllAttendance = async (payload: IPayload) => {
  // -----------------------------
  // 1️⃣ Build School Filters
  // -----------------------------
  const buildSchoolFilter = (query: IPayload) => {
    const filter: any = {};

    if (query.schoolCode) filter.schoolCode = query.schoolCode;
    if (query.concernMobileNumber)
      filter.concernMobileNumber = query.concernMobileNumber;

    if (query.village) filter["address.village"] = query.village;
    if (query.union) filter["address.union"] = query.union;
    if (query.upozila) filter["address.upozila"] = query.upozila;
    if (query.district) filter["address.district"] = query.district;

    return filter;
  };

  const schoolFilter = buildSchoolFilter(payload);

  // -----------------------------
  // 2️⃣ Find schools based on filter
  // -----------------------------
  const matchedSchools = await schoolModel.find(schoolFilter);

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
    const dateFilter: any = {};
    let targetDateString: string | undefined;

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

  let banana: IBananaAttendance[] = [];
  let banruti: IBanrutiAttendance[] = [];
  let egg: IEggAttendance[] = [];

  const baseQuery = { schoolId: { $in: schoolIds }, ...dateFilter };
  const sortOption = { createdAt: "descending" as const };

  const fetchPromises = [];

  if (!attendanceType || attendanceType === "banana") {
    fetchPromises.push(
      attendanceModel.BananaAttendance
        .find(baseQuery)
        .populate("schoolId")
        .sort(sortOption)
    );
  } else {
    fetchPromises.push(Promise.resolve([]));
  }

  if (!attendanceType || attendanceType === "banruti") {
    fetchPromises.push(
      attendanceModel.banrutiAttendance
        .find(baseQuery)
        .populate("schoolId")
        .sort(sortOption)
    );
  } else {
    fetchPromises.push(Promise.resolve([]));
  }

  if (!attendanceType || attendanceType === "egg") {
    fetchPromises.push(
      attendanceModel.eggAttendance
        .find(baseQuery)
        .populate("schoolId")
        .sort(sortOption)
    );
  } else {
    fetchPromises.push(Promise.resolve([]));
  }

  // Use Promise.all to fetch data concurrently
  [banana, banruti, egg] = (await Promise.all(fetchPromises)) as unknown as [
    IBananaAttendance[],
    IBanrutiAttendance[],
    IEggAttendance[]
  ];

  // -----------------------------
  // 5️⃣ Merge all attendance
  // -----------------------------
  const all: any[] = [
    ...banana.map((i) => ({
      ...i.toObject(),
      type: "banana",
      count: i.banana,
      recordId: i._id,
    })),
    ...banruti.map((i) => ({
      ...i.toObject(),
      type: "banruti",
      count: i.banruti,
      recordId: i._id,
    })),
    ...egg.map((i) => ({
      ...i.toObject(),
      type: "egg",
      count: i.egg,
      recordId: i._id,
    })),
  ];

  // -----------------------------
  // 6️⃣ Grouping by date + school (Aggregates the counts)
  // -----------------------------
  const grouped: any = {};

  interface ISchoolObj extends ISchool {}

  all.forEach((item) => {
    // Assuming item.createdAt is a Date object from Mongoose
    const date = item.createdAt.toISOString().split("T")[0];
    const schoolObj: ISchoolObj = item.schoolId;
    const key = `${date}-${schoolObj._id.toString()}`;

    if (!grouped[key]) {
      grouped[key] = {
        date,
        schoolId: schoolObj._id.toString(),
        schoolName: schoolObj.schoolName,
        schoolCode: schoolObj.schoolCode,
        concernMobileNumber: schoolObj.concernMobileNumber || null,
        address: {
          village: schoolObj.address?.village || "",
          union: schoolObj.address?.union || "",
          upozila: schoolObj.address?.upozila || "",
          district: schoolObj.address?.district || "",
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
  const submittedSchoolIds = Object.values(grouped).map(
    (item: any) => item.schoolId
  );

  // 7️⃣b. Master School List থেকে সেই স্পটগুলো খুঁজে বের করা, যারা কোনো ডেটাই জমা দেয়নি
  const completelyMissingSchools = matchedSchools.filter(
    (school) => !submittedSchoolIds.includes(school._id.toString())
  );

  // 7️⃣c. মিসিং স্পটগুলিকে final report-এর ফরম্যাটে তৈরি করা
  const missingSchoolsData = completelyMissingSchools.map((school) => {
    return {
      // Use the determined single date string from step 3
      date: targetDateString,
      schoolId: school._id.toString(),
      schoolName: school.schoolName,
      schoolCode: school.schoolCode,
      concernMobileNumber: school.concernMobileNumber || null,
      address: {
        village: school.address?.village || "",
        union: school.address?.union || "",
        upozila: school.address?.upozila || "",
        district: school.address?.district || "",
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
};

// create comment service

async function createComment(payload: IBananaAttendance) {
  const result = await attendanceModel.commentModel;
  return result;
}

const getComments = async () => {
  const result = await attendanceModel.commentModel.find();
  return result;
};

const deleteAttendanceService = async (id: string) => {
  console.log(id);
  const existBanana = await attendanceModel.BananaAttendance.find({ _id: id });
  if (existBanana) {
    console.log("find something");
  }
  if (!existBanana) {
    console.log("kisui pailam na");
  }
  console.log(existBanana);
};

const missing = async () => {
  const result = await schoolModel.find({schoolCode: "55"});
  const banrutiAttendance = await attendanceModel.banrutiAttendance.find({schoolId: result[0]._id});
  console.log(banrutiAttendance);
  // console.log(result);
};

export const attendanceService = {
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
