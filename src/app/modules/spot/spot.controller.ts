import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { spotService } from "./spot.service";

const createSpot = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const result = await spotService.createSpot(payload);
  sendResponse(res, {
    message: "Spot created Successfully",
    statusCode: StatusCodes.CREATED,
    success: true,
    data: result,
  });
});

// spot login

const spotLogin = catchAsync(async (req, res, next) => {
  const payload = req.body;
  // console.log(payload);
  const result = await spotService.spotLogin(payload);
  sendResponse(res, {
    message: "Spot logged in Successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});
// get all spot

const getAllSpot = catchAsync(async (req, res, next) => {
  const result = await spotService.getAllSpot();
  sendResponse(res, {
    message: "spot get successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

export const spotController = {
  createSpot,
  spotLogin,
  getAllSpot,
};
