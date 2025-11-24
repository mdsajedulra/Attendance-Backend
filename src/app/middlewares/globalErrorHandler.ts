/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { handleCastError } from "../helpers/handleCastError";
import { handleValidationError } from "../helpers/handleValidationError";
import { handleDuplicateError } from "../helpers/handleDuplicateError";
import { handleGenericError } from "../helpers/handleGenericError";
import { handleZodError } from "../helpers/handleZodError";
import { StatusCodes } from "http-status-codes";
import { TErrorSources } from "../interface/error";
import config from "../config";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err.statusCode);
  //setting default values
  let statusCode = 500;
  let message = "Something went wrong!";
  let errorSources: TErrorSources = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  if (err.name && err.name === "ZodError") {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err instanceof mongoose.Error.CastError) {
    handleCastError(err, res);
  } else if (err instanceof mongoose.Error.ValidationError) {
    handleValidationError(err, res);
  } else if (err.code && err.code === 11000) {
    if (err.code === 11000 && err.keyPattern?.email) {
      res.status(StatusCodes.CONFLICT).json({
        status: false,
        message: "Email is already registered",
        error: err,
      });
    }
    handleDuplicateError(err, res);
  } else if (err instanceof Error) {
    handleGenericError(err, res);
  }

  // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
  //   status: false,
  //   message: "Something went wrong",
  //   error: err,
  // });
  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    err,
    stack: config.NODE_ENV === "development" ? err?.stack : null,
  });
};
