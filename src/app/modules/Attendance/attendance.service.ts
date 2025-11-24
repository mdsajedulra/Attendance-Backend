import mongoose, { ObjectId } from "mongoose";

import { IFemaleAttendance } from "./attendance.interface";
import { attendanceModel } from "./attendance.model";
import moment from "moment-timezone";

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
const createFemaleAttendance = async (payload: IFemaleAttendance) => {
  const todayStart = moment().tz("Asia/Dhaka").startOf("day").toDate();
  const todayEnd = moment().tz("Asia/Dhaka").endOf("day").toDate();
  const existing = await attendanceModel.femaleAttendance.findOne({
    spotId: new mongoose.Types.ObjectId(payload.spotId),
    createdAt: { $gte: todayStart, $lte: todayEnd },
  });
  if (existing) {
    throw new Error("আজ ইতিমধ্যেই এই স্পটে অ্যাটেনডেন্স সাবমিট করা হয়েছে।");
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
    spotId: new mongoose.Types.ObjectId(payload.spotId),
    createdAt: { $gte: todayStart, $lte: todayEnd },
  });
  if (existing) {
    throw new Error("আজ ইতিমধ্যেই এই স্পটে অ্যাটেনডেন্স সাবমিট করা হয়েছে।");
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
    spotId: new mongoose.Types.ObjectId(payload.spotId),
    createdAt: { $gte: todayStart, $lte: todayEnd },
  });
  if (existing) {
    throw new Error("আজ ইতিমধ্যেই এই স্পটে অ্যাটেনডেন্স সাবমিট করা হয়েছে।");
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
const getAllAttendance = async (payload: ObjectId) => {
  console.log(payload);
  const female = await attendanceModel.femaleAttendance
    .find()
    .populate("spotId")
    .sort({ createdAt: -1 });
  const male = await attendanceModel.maleAttendance
    .find()
    .populate("spotId")
    .sort({ createdAt: -1 });
  const child = await attendanceModel.childAttendance
    .find()
    .populate("spotId")
    .sort({ createdAt: -1 });

  return { female: female, male: male, child: child };
};

// create comment service

const createComment = async (payload: IFemaleAttendance) => {
  const result = await attendanceModel.commentModel.create(payload);
  return result;
};

const getComments = async () => {
  const result = await attendanceModel.commentModel.find();
  return result;
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
};
