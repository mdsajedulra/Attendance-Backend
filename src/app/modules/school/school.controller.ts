import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { schoolService } from "./school.service";

const createSchool = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const result = await schoolService.createSchool(payload);
  sendResponse(res, {
    message: "School created Successfully",
    statusCode: StatusCodes.CREATED,
    success: true,
    data: result,
  });
});

// school login

const schoolLogin = catchAsync(async (req, res, next) => {
  const payload = req.body;
  // console.log(payload);
  const result = await schoolService.schoolLogin(payload);
  sendResponse(res, {
    message: "School logged in Successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});
// get all school

const getAllSchool = catchAsync(async (req, res, next) => {
  const result = await schoolService.getAllSchool();
  sendResponse(res, {
    message: "school get successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

export const schoolController = {
  createSchool,
  schoolLogin,
  getAllSchool,
};
