"use strict";
// const getAttendance = async (query: any) => {
//   const {
//     type,
//     schoolName,
//     schoolCode,
//     mobile,
//     district,
//     upozila,
//     union,
//     village,
//     date,
//     startDate,
//     endDate
//   } = query;
//   const filter: any = {};
//   const schoolFilter: any = {};
//   // attendance type filter
//   if (type) {
//     filter[`${type}.count`] = { $exists: true };
//   }
//   // date filter
//   if (date) {
//     const start = new Date(date);
//     start.setHours(0,0,0,0);
//     const end = new Date(date);
//     end.setHours(23,59,59,999);
//     filter.date = { $gte: start, $lte: end };
//   }
//   // date range
//   if (startDate && endDate) {
//     filter.date = {
//       $gte: new Date(startDate),
//       $lte: new Date(endDate)
//     };
//   }
//   // school filters
//   if (schoolName) {
//     schoolFilter.schoolName = { $regex: schoolName, $options: "i" };
//   }
//   if (schoolCode) {
//     schoolFilter.schoolCode = schoolCode;
//   }
//   if (mobile) {
//     schoolFilter.concernMobileNumber = { $regex: mobile };
//   }
//   if (district) {
//     schoolFilter["address.district"] = { $regex: district, $options: "i" };
//   }
//   if (upozila) {
//     schoolFilter["address.upozila"] = { $regex: upozila, $options: "i" };
//   }
//   if (union) {
//     schoolFilter["address.union"] = { $regex: union, $options: "i" };
//   }
//   if (village) {
//     schoolFilter["address.village"] = { $regex: village, $options: "i" };
//   }
//   const result = await Attendance.find(filter)
//     .populate({
//       path: "schoolId",
//       match: schoolFilter
//     })
//     .lean();
//   // remove unmatched populate
//   const filtered = result.filter(a => a.schoolId !== null);
//   return filtered;
// };
