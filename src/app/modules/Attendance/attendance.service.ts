import mongoose, { Model, ObjectId, Types } from "mongoose";

import moment from "moment-timezone";

import { IComment } from "./attendance.interface";
import { attendanceModel } from "./attendance.model";
import spotModel from "../spot/spot.model";

// sajed

interface IAddress {
  village?: string;
  union?: string;
  upozila?: string;
  district?: string;
}

// Spot Document Interface
interface ISpot extends Document {
  _id: Types.ObjectId;
  spotName: string;
  spotCode: string;
  concernMobileNumber?: string;
  address?: IAddress;
  // Add other fields as needed
}

// Base Attendance Document Interface
interface IAttendanceBase extends Document {
  _id: Types.ObjectId;
  spotId: ISpot; // Populated Spot Document
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

// Specific Attendance Interfaces
interface IFemaleAttendance extends IAttendanceBase {
  toObject(): any;
  female: number;
}
interface IMaleAttendance extends IAttendanceBase {
  toObject(): any;
  male: number;
}
interface IChildAttendance extends IAttendanceBase {
  toObject(): any;
  child: number;
}

// Placeholder for Mongoose Models
// Replace these with your actual imported models

// Input Payload Interface
interface IPayload {
  spotCode?: string;
  concernMobileNumber?: string;
  village?: string;
  union?: string;
  upozila?: string;
  district?: string;
  date?: string; // Single date 'YYYY-MM-DD'
  startDate?: string;
  endDate?: string;
  attendanceType?: "female" | "male" | "child";
}

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
const createFemaleAttendance = async (payload: IFemaleAttendance) => {
  const todayStart = moment().tz("Asia/Dhaka").startOf("day").toDate();
  const todayEnd = moment().tz("Asia/Dhaka").endOf("day").toDate();
  const existing = await attendanceModel.femaleAttendance.findOne({
    spotId:
      payload.spotId instanceof mongoose.Types.ObjectId
        ? payload.spotId
        : new mongoose.Types.ObjectId(payload.spotId as any),
    createdAt: { $gte: todayStart, $lte: todayEnd },
  });
  if (existing) {
    throw new Error("আজ ইতিমধ্যেই আপনার স্কুলের তথ্য সাবমিট করা হয়েছে।");
  }
  const result = await attendanceModel.femaleAttendance.create(payload);
  return result;
};

const getLastFemaleAttendance = async () => {
  let result;
  try {
    result = await attendanceModel.femaleAttendance
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

const getFemaleAttendance = async () => {
  const result = await attendanceModel.femaleAttendance.find();
  return result;
};
// create male attendance services

const createMaleAttendance = async (payload: IFemaleAttendance) => {
  const todayStart = moment().tz("Asia/Dhaka").startOf("day").toDate();
  const todayEnd = moment().tz("Asia/Dhaka").endOf("day").toDate();
  const existing = await attendanceModel.maleAttendance.findOne({
    spotId:
      payload.spotId instanceof mongoose.Types.ObjectId
        ? payload.spotId
        : new mongoose.Types.ObjectId(payload.spotId as any),
    createdAt: { $gte: todayStart, $lte: todayEnd },
  });
  if (existing) {
    throw new Error("আজ ইতিমধ্যেই আপনার স্কুলের তথ্য সাবমিট করা হয়েছে।");
  }
  const result = await attendanceModel.maleAttendance.create(payload);
  return result;
};

const getLastMaleAttendance = async () => {
  let result;
  try {
    result = await attendanceModel.maleAttendance
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

const getMaleAttendance = async () => {
  const result = await attendanceModel.maleAttendance.find();
  return result;
};
// create child attendance services

const createChildAttendance = async (payload: IFemaleAttendance) => {
  const todayStart = moment().tz("Asia/Dhaka").startOf("day").toDate();
  const todayEnd = moment().tz("Asia/Dhaka").endOf("day").toDate();
  const existing = await attendanceModel.childAttendance.findOne({
    spotId:
      payload.spotId instanceof mongoose.Types.ObjectId
        ? payload.spotId
        : new mongoose.Types.ObjectId(payload.spotId as any),
    createdAt: { $gte: todayStart, $lte: todayEnd },
  });
  if (existing) {
    throw new Error("আজ ইতিমধ্যেই আপনার স্কুলের তথ্য সাবমিট করা হয়েছে।");
  }
  const result = await attendanceModel.childAttendance.create(payload);
  return result;
};
const getLastChildAttendance = async () => {
  let result;
  try {
    result = await attendanceModel.childAttendance
      .findOne()
      .sort({ createdAt: -1 });
  } catch (error) {
    console.error("Error fetching last entry:", error);
  }
  return result;
};

const getChildAttendance = async () => {
  const result = await attendanceModel.childAttendance.find();
  return result;
};

const getAllLastAttendance = async (payload: ObjectId) => {
  console.log(payload);
  const lastFemale = await attendanceModel.femaleAttendance
    .findOne({ spotId: payload })
    .sort({ createdAt: -1 });
  const lastMale = await attendanceModel.maleAttendance
    .findOne({ spotId: payload })
    .sort({ createdAt: -1 });
  const lastChild = await attendanceModel.childAttendance
    .findOne({ spotId: payload })
    .sort({ createdAt: -1 });

  return [{ lastFemale: lastFemale, lastMale: lastMale, lastChild: lastChild }];
};
const getAllAttendance = async (payload: IPayload) => {
  // -----------------------------
  // 1️⃣ Build Spot Filters
  // -----------------------------
  const buildSpotFilter = (query: IPayload) => {
    const filter: any = {};

    if (query.spotCode) filter.spotCode = query.spotCode;
    if (query.concernMobileNumber)
      filter.concernMobileNumber = query.concernMobileNumber;

    if (query.village) filter["address.village"] = query.village;
    if (query.union) filter["address.union"] = query.union;
    if (query.upozila) filter["address.upozila"] = query.upozila;
    if (query.district) filter["address.district"] = query.district;

    return filter;
  };

  const spotFilter = buildSpotFilter(payload);

  // -----------------------------
  // 2️⃣ Find spots based on filter
  // -----------------------------
  const matchedSpots = await spotModel.find(spotFilter);

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

  let female: IFemaleAttendance[] = [];
  let male: IMaleAttendance[] = [];
  let child: IChildAttendance[] = [];

  const baseQuery = { spotId: { $in: spotIds }, ...dateFilter };
  const sortOption = { createdAt: "descending" as const };

  const fetchPromises = [];

  if (!attendanceType || attendanceType === "female") {
    fetchPromises.push(
      attendanceModel.femaleAttendance
        .find(baseQuery)
        .populate("spotId")
        .sort(sortOption)
    );
  } else {
    fetchPromises.push(Promise.resolve([]));
  }

  if (!attendanceType || attendanceType === "male") {
    fetchPromises.push(
      attendanceModel.maleAttendance
        .find(baseQuery)
        .populate("spotId")
        .sort(sortOption)
    );
  } else {
    fetchPromises.push(Promise.resolve([]));
  }

  if (!attendanceType || attendanceType === "child") {
    fetchPromises.push(
      attendanceModel.childAttendance
        .find(baseQuery)
        .populate("spotId")
        .sort(sortOption)
    );
  } else {
    fetchPromises.push(Promise.resolve([]));
  }

  // Use Promise.all to fetch data concurrently
  [female, male, child] = (await Promise.all(fetchPromises)) as unknown as [
    IFemaleAttendance[],
    IMaleAttendance[],
    IChildAttendance[]
  ];

  // -----------------------------
  // 5️⃣ Merge all attendance
  // -----------------------------
  const all: any[] = [
    ...female.map((i) => ({
      ...i.toObject(),
      type: "female",
      count: i.female,
      recordId: i._id,
    })),
    ...male.map((i) => ({
      ...i.toObject(),
      type: "male",
      count: i.male,
      recordId: i._id,
    })),
    ...child.map((i) => ({
      ...i.toObject(),
      type: "child",
      count: i.child,
      recordId: i._id,
    })),
  ];

  // -----------------------------
  // 6️⃣ Grouping by date + spot (Aggregates the counts)
  // -----------------------------
  const grouped: any = {};

  interface ISpotObj extends ISpot {}

  all.forEach((item) => {
    // Assuming item.createdAt is a Date object from Mongoose
    const date = item.createdAt.toISOString().split("T")[0];
    const spotObj: ISpotObj = item.spotId;
    const key = `${date}-${spotObj._id.toString()}`;

    if (!grouped[key]) {
      grouped[key] = {
        date,
        spotId: spotObj._id.toString(),
        spotName: spotObj.spotName,
        spotCode: spotObj.spotCode,
        concernMobileNumber: spotObj.concernMobileNumber || null,
        address: {
          village: spotObj.address?.village || "",
          union: spotObj.address?.union || "",
          upozila: spotObj.address?.upozila || "",
          district: spotObj.address?.district || "",
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
  const submittedSpotIds = Object.values(grouped).map(
    (item: any) => item.spotId
  );

  // 7️⃣b. Master Spot List থেকে সেই স্পটগুলো খুঁজে বের করা, যারা কোনো ডেটাই জমা দেয়নি
  const completelyMissingSpots = matchedSpots.filter(
    (spot) => !submittedSpotIds.includes(spot._id.toString())
  );

  // 7️⃣c. মিসিং স্পটগুলিকে final report-এর ফরম্যাটে তৈরি করা
  const missingSpotsData = completelyMissingSpots.map((spot) => {
    return {
      // Use the determined single date string from step 3
      date: targetDateString,
      spotId: spot._id.toString(),
      spotName: spot.spotName,
      spotCode: spot.spotCode,
      concernMobileNumber: spot.concernMobileNumber || null,
      address: {
        village: spot.address?.village || "",
        union: spot.address?.union || "",
        upozila: spot.address?.upozila || "",
        district: spot.address?.district || "",
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
};

// create comment service

async function createComment(payload: IFemaleAttendance) {
  const result = await attendanceModel.commentModel;
  return result;
}

const getComments = async () => {
  const result = await attendanceModel.commentModel.find();
  return result;
};

const deleteAttendanceService = async (id: string) => {
  console.log(id);
  const existFemale = await attendanceModel.femaleAttendance.find({ _id: id });
  if (existFemale) {
    console.log("find something");
  }
  if (!existFemale) {
    console.log("kisui pailam na");
  }
  console.log(existFemale);
};

const missing = async () => {
  const result = await spotModel.find({spotCode: "55"});
  const maleAttendance = await attendanceModel.maleAttendance.find({spotId: result[0]._id});
  console.log(maleAttendance);
  // console.log(result);
};

export const attendanceService = {
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
