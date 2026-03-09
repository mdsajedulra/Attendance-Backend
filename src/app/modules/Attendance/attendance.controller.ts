import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { attendanceService } from "./attendance.service";
import { ObjectId } from "mongoose";


// reform and redesign 


const createAttendance = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await attendanceService.createAttendance(payload);
  sendResponse(res, {
    message: "Attendance recorded successfully",
    statusCode: StatusCodes.CREATED,
    success: true,
    data: result,
  });
});


// const getAttendance = catchAsync(async (req, res) => {
//   const result = await attendanceService.getAttendance(req.query);
//   sendResponse(res, {
//     message: "Attendance fetched successfully",
//     statusCode: StatusCodes.OK,
//     success: true,
//     data: result,
//   });
// });



// const getLastAttendance = catchAsync(async (req, res) => {
//   const result = await attendanceService.getLastAttendance();
//   sendResponse(res, { 
//     message: "Last attendance fetched successfully",
//     statusCode: StatusCodes.OK,
//     success: true,
//     data: result,
//   });
// });











// banana attendance controller

const createBananaAttendance = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await attendanceService.createBananaAttendance(payload);
  sendResponse(res, {
    message: "banana attendance recorded successfully",
    statusCode: StatusCodes.CREATED,
    success: true,
    data: result,
  });
});

const getLastBananaAttendance = catchAsync(async (req, res) => {
  const result = await attendanceService.getLastBananaAttendance();
  sendResponse(res, {
    message: "Last banana attendance fetched successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

const getBananaAttendance = catchAsync(async (req, res) => {
  const result = await attendanceService.getBananaAttendance();
  sendResponse(res, {
    message: "banana attendance fetched successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

// create banruti attendance

const createBanrutiAttendance = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await attendanceService.createBanrutiAttendance(payload);
  sendResponse(res, {
    message: "Banruti attendance recorded successfully",
    statusCode: StatusCodes.CREATED,
    success: true,
    data: result,
  });
});

const getLastBanrutiAttendance = catchAsync(async (req, res) => {
  const result = await attendanceService.getLastBanrutiAttendance();
  sendResponse(res, {
    message: "Last banruti attendance fetched successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});
const getBanrutiAttendance = catchAsync(async (req, res) => {
  const result = await attendanceService.getBanrutiAttendance();
  sendResponse(res, {
    message: "Banruti attendance fetched successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

// egg attendance controller
const createEggAttendance = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await attendanceService.createEggAttendance(payload);
  sendResponse(res, {
    message: "Egg attendance recorded successfully",
    statusCode: StatusCodes.CREATED,
    success: true,
    data: result,
  });
});

const getLastEggAttendance = catchAsync(async (req, res) => {
  const result = await attendanceService.getLastEggAttendance();
  sendResponse(res, {
    message: "Last egg attendance fetched successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

const getEggAttendance = catchAsync(async (req, res) => {
  const result = await attendanceService.getEggAttendance();
  sendResponse(res, {
    message: "Egg attendance fetched successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

const getAllLastAttendance = catchAsync(async (req, res) => {
  console.log(req.query);
  const result = await attendanceService.getAllLastAttendance(
    req.query.schoolId as unknown as ObjectId
  );
  sendResponse(res, {
    message: "All last attendance fetched successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

const getAllAttendance = catchAsync(async (req, res) => {
  const result = await attendanceService.getAllAttendance(req.query);
  sendResponse(res, {
    message: "All attendance fetched successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

// comment controller
const createComment = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await attendanceService.createComment(payload);
  sendResponse(res, {
    message: "Comment added successfully",
    statusCode: StatusCodes.CREATED,
    success: true,
    data: result,
  });
});

const getComments = catchAsync(async (req, res) => {
  const result = await attendanceService.getComments();

  sendResponse(res, {
    message: "Comments fetched successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

// delete attendance

const deleteAttendance = catchAsync(async (req, res) => {
  console.log(req.params.id);
  const result = await attendanceService.deleteAttendanceService(req.params.id);
  sendResponse(res, {
    message: "Delete Attendance Successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

const missing = catchAsync(async (req, res) => {
  const result = attendanceService.missing();
  sendResponse(res, {
    message: "get missing attendance",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

export const attendanceController = {
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
  deleteAttendance,
  missing,



  createAttendance,
  // getLastAttendance,
  // getAttendance,
};
