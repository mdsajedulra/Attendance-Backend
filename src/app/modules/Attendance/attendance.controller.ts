import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { attendanceService } from "./attendance.service";
import { ObjectId } from "mongoose";

// female attendance controller

const createFemaleAttendance = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await attendanceService.createFemaleAttendance(payload);
  sendResponse(res, {
    message: "Female attendance recorded successfully",
    statusCode: StatusCodes.CREATED,
    success: true,
    data: result,
  });
});

const getLastFemaleAttendance = catchAsync(async (req, res) => {
  const result = await attendanceService.getLastFemaleAttendance();
  sendResponse(res, {
    message: "Last female attendance fetched successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

const getFemaleAttendance = catchAsync(async (req, res) => {
  const result = await attendanceService.getFemaleAttendance();
  sendResponse(res, {
    message: "Female attendance fetched successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

// create male attendance

const createMaleAttendance = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await attendanceService.createMaleAttendance(payload);
  sendResponse(res, {
    message: "Male attendance recorded successfully",
    statusCode: StatusCodes.CREATED,
    success: true,
    data: result,
  });
});

const getLastMaleAttendance = catchAsync(async (req, res) => {
  const result = await attendanceService.getLastMaleAttendance();
  sendResponse(res, {
    message: "Last male attendance fetched successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});
const getMaleAttendance = catchAsync(async (req, res) => {
  const result = await attendanceService.getMaleAttendance();
  sendResponse(res, {
    message: "Male attendance fetched successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

// child attendance controller
const createChildAttendance = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await attendanceService.createChildAttendance(payload);
  sendResponse(res, {
    message: "Child attendance recorded successfully",
    statusCode: StatusCodes.CREATED,
    success: true,
    data: result,
  });
});

const getLastChildAttendance = catchAsync(async (req, res) => {
  const result = await attendanceService.getLastChildAttendance();
  sendResponse(res, {
    message: "Last child attendance fetched successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

const getChildAttendance = catchAsync(async (req, res) => {
  const result = await attendanceService.getChildAttendance();
  sendResponse(res, {
    message: "Child attendance fetched successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

const getAllLastAttendance = catchAsync(async (req, res) => {
  const result = await attendanceService.getAllLastAttendance(
    req.query.spotId as unknown as ObjectId
  );
  sendResponse(res, {
    message: "All last attendance fetched successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

const getAllAttendance = catchAsync(async (req, res) => {
  const result = await attendanceService.getAllAttendance(
    req.query.spotId as unknown as ObjectId
  );
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

export const attendanceController = {
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
