import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { contactInfoService } from "./contact.service";

const createContactInfo = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const result = await contactInfoService.createContactInfo(payload);
  sendResponse(res, {
    message: "Contact info created Successfully",
    statusCode: StatusCodes.CREATED,
    success: true,
    data: result,
  });
});

// get contact info
const getContactInfo = catchAsync(async (req, res, next) => {
  const result = await contactInfoService.getContactInfo();
  sendResponse(res, {
    message: "Contact info fetched Successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

// update contact info
const updateContactInfo = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const result = await contactInfoService.updateContactInfo(payload); 
  sendResponse(res, {
    message: "Contact info updated Successfully",
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
  });
});

export const contactInfoController = {
    createContactInfo,
    getContactInfo,
    updateContactInfo
}