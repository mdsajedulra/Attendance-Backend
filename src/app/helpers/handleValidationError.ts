/* eslint-disable @typescript-eslint/no-explicit-any */
import { StatusCodes } from "http-status-codes";
import { TErrorSources, TGenericErrorResponse } from "../interface/error";

export const handleValidationError = (err: any): TGenericErrorResponse => {

  const errorSources: TErrorSources = Object.values(err.errors).map(
    (error: any) => {
      return {
        path: error?.path,
        message: error?.message,
      };
    }
  );

  return {
    statusCode: StatusCodes.BAD_REQUEST,
    message: "Validation Error",
    errorSources,
  };
};