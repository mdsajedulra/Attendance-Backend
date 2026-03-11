/* eslint-disable @typescript-eslint/no-explicit-any */
import { StatusCodes } from "http-status-codes";
import { TErrorSources, TGenericErrorResponse } from "../interface/error";

export const handleGenericError = (err: any): TGenericErrorResponse => {

  const errorSources: TErrorSources = [
    {
      path: "",
      message: err.message,
    },
  ];

  return {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Something went wrong",
    errorSources,
  };
};