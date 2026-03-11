import mongoose, { Model, ObjectId, Types } from "mongoose";

import moment from "moment-timezone";

import { IAttendance, IComment } from "./attendance.interface";
import { Attendance, attendanceModel } from "./attendance.model";
import schoolModel from "../school/school.model";


// reform and redesign

const createAttendance = async (payload: IAttendance) => {
  const startOfDay = moment().tz("Asia/Dhaka").startOf("day").toDate();
  const endOfDay = moment().tz("Asia/Dhaka").endOf("day").toDate();

  console.log(payload);

  if (!payload.schoolId) {
    throw new Error("School Not found");
  }
  const existing = await Attendance.findOne({
    schoolId: payload.schoolId,
    createdAt: { $gte: startOfDay, $lte: endOfDay },
  });
  if (payload.banana && existing?.banana?.submittedAt) {
    throw new Error("আজ ইতিমধ্যেই Banana submit করা হয়েছে");
  }

  if (payload.banruti && existing?.banruti?.submittedAt) {
    throw new Error("আজ ইতিমধ্যেই Banruti submit করা হয়েছে");
  }

  if (payload.egg && existing?.egg?.submittedAt) {
    throw new Error("আজ ইতিমধ্যেই Egg submit করা হয়েছে");
  }

  const result = await Attendance.findOneAndUpdate(
    {
      schoolId: payload.schoolId,
      createdAt: { $gte: startOfDay, $lte: endOfDay },
    },
    { $set: payload },
    { upsert: true, new: true },
  );

  return result;
};

// get last attendance

const getLastAttendance = async (id: ObjectId) => {
  console.log(id);
  if (!id) {
    throw new Error("input id");
  }
  const result = await Attendance.findOne({ schoolId: id }).sort({
    createdAt: -1,
  });
  console.log(result);
  return result;
};

// console.log(payload);
// const result = await Attendance.find({
//   schoolId: new mongoose.Types.ObjectId(payload.schoolId),
//   createdAt: { $gte: payload.date, $lte: payload.date },
// });
const getAttendance = async (query: any) => {
  const {
    type,
    schoolName,
    schoolCode,
    mobile,
    district,
    upozila,
    union,
    village,
    date,
    startDate,
    endDate,
  } = query;

  

  const filter: any = {};
  const schoolFilter: any = {};

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

    filter.createdAt = { $gte: start, $lte: end };
  }

  // date range
  if (startDate && endDate) {
    filter.createdAt = {
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
  const result = await Attendance.find(filter)
    .populate({
      path: "schoolId",
      match: schoolFilter,
    })
    .lean();

  // console.log(result);

  // remove unmatched populate
  const filtered = result.filter((a) => a.schoolId !== null);

  return result;
};

// get attendance report

const getAreaReport = async (query: any) => {
  const match: any = {};

  if (query.startDate && query.endDate) {
    match.date = {
      $gte: new Date(query.startDate),
      $lte: new Date(query.endDate),
    };
  }

  const pipeline: any[] = [
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
      $match: {
        ...(query.district && { "school.address.district": query.district }),
        ...(query.upozila && { "school.address.upozila": query.upozila }),
        ...(query.union && { "school.address.union": query.union }),
        ...(query.village && { "school.address.village": query.village }),
      },
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

  const result = await Attendance.aggregate(pipeline);

  return result;
};

// sajed

// create comment service

async function createComment(payload: any) {
  const result = await attendanceModel.commentModel.create(payload);
  return result;
}

const getComments = async () => {
  const result = await attendanceModel.commentModel.find();
  return result;
};

const deleteAttendanceService = async (id: string) => {
  const existBanana = await Attendance.deleteOne({ _id: id });
  return existBanana;
};

// get missing data from attendance



const getMissing = async (queryParams: any) => {
  const { 
    date,        // Required: "YYYY-MM-DD"
    itemType,    // Required: "banana", "egg", or "banruti"
    district, 
    upozila, 
    union, 
    village, 
    schoolCode, 
    schoolName 
  } = queryParams;

  // 1. Date formatting (Start of the specific day)
  const searchDate = new Date(date);
  searchDate.setUTCHours(0, 0, 0, 0);

  // 2. School matching filters (Dynamic)
  const schoolFilter: Record<string, any> = {};
  
  if (district) schoolFilter["address.district"] = district;
  if (upozila) schoolFilter["address.upozila"] = upozila;
  if (union) schoolFilter["address.union"] = union;
  if (village) schoolFilter["address.village"] = village;
  if (schoolCode) schoolFilter["schoolCode"] = schoolCode;
  if (schoolName) schoolFilter["schoolName"] = { $regex: schoolName, $options: "i" };

  const result = await schoolModel.aggregate([
    {
      // Prothome school gulo filter kora (Location/Code/Name onujayi)
      $match: schoolFilter
    },
    {
      // Attendance data join kora (Oi specific diner jonno)
      $lookup: {
        from: "attendances",
        let: { school_id: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$schoolId", "$$school_id"] },
                  { $eq: ["$date", searchDate] }
                ]
              }
            }
          }
        ],
        as: "submission"
      }
    },
    {
      $addFields: {
        entry: { $arrayElemAt: ["$submission", 0] }
      }
    },
    {
      // logic: Jodi oi specific item-er entry na thake ba count zero hoy
      $match: {
        $or: [
          { [`entry.${itemType}.count`]: { $exists: false } },
          { [`entry.${itemType}.count`]: null },
          { [`entry.${itemType}.count`]: 0 }
        ]
      }
    },
    {
      // UI er jonno dorkari fields select kora
      $project: {
        schoolName: 1,
        schoolCode: 1,
        address: 1,
        concernMobileNumber: 1,
        status: { $literal: "Missing" },
        requestedItem: { $literal: itemType }
      }
    }
  ]);

  return result;
};

export const attendanceService = {
  createComment,
  getComments,
  deleteAttendanceService,

  createAttendance,
  getLastAttendance,
  getAttendance,

  getAreaReport,
  getMissing,


};
