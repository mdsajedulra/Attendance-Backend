/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { handleCastError } from "../helpers/handleCastError";
import { handleValidationError } from "../helpers/handleValidationError";
import { handleDuplicateError } from "../helpers/handleDuplicateError";
import { handleGenericError } from "../helpers/handleGenericError";
import { handleZodError } from "../helpers/handleZodError";
import { TErrorSources } from "../interface/error";
import config from "../config";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  if (res.headersSent) {
    return next(err);
  }

  // default values
  let statusCode = 500;
  let message = "Something went wrong!";
  let errorSources: TErrorSources = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  if (err.name === "ZodError") {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;

  } else if (err instanceof mongoose.Error.CastError) {
    const simplifiedError = handleCastError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;

  } else if (err instanceof mongoose.Error.ValidationError) {
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;

  } else if (err.code === 11000) {
    const simplifiedError = handleDuplicateError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;

  } else if (err instanceof Error) {
    const simplifiedError = handleGenericError(err);
    message = simplifiedError.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.NODE_ENV === "development" ? err?.stack : null,
  });
};