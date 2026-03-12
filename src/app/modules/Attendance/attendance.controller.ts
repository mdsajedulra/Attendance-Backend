import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { attendanceService } from "./attendance.service";
import { get, ObjectId } from "mongoose";

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

const getAttendance = catchAsync(async (req, res) => {
  const result = await attendanceService.getAttendance(req.query);
  sendResponse(res, {
    message: "Attendance fetched successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

// get report

const getAttendanceReport = catchAsync(async (req, res) => {
  const result = await attendanceService.getAreaReport(req.query);
  sendResponse(res, {
    message: "Attendance report fetched successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

const getLastAttendance = catchAsync(async (req, res) => {
  console.log(req.query.schoolId);
  const result = await attendanceService.getLastAttendance(
    req.query.schoolId as unknown as ObjectId,
  );
  sendResponse(res, {
    message: "Last attendance fetched successfully",
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
const getComment = catchAsync(async (req, res) => {

  const result = await attendanceService.getComments();
  sendResponse(res, {
    message: "Comment added successfully",
    statusCode: StatusCodes.CREATED,
    success: true,
    data: result,
  });
});



// delete attendance

const deleteAttendance = catchAsync(async (req, res) => {
  console.log(req.params.id);
  const result = await attendanceService.deleteAttendanceService(req.params.id as string);
  sendResponse(res, {
    message: "Delete Attendance Successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

// get missing attendance 


const getMissing = catchAsync(async (req, res) => {

  const result = await attendanceService.getMissing(req.query);
  sendResponse(res, {
    message: "Missing get Successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});


// insert bulk attendance



export const attendanceController = {
  deleteAttendance,

  createComment,
getComment,

  createAttendance,
  getLastAttendance,
  getAttendance,
  getAttendanceReport,

  getMissing
  ,
  
};
