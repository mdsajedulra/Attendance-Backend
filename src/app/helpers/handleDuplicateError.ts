/* eslint-disable @typescript-eslint/no-explicit-any */
import { StatusCodes } from "http-status-codes";
import { TErrorSources, TGenericErrorResponse } from "../interface/error";

export const handleDuplicateError = (err: any): TGenericErrorResponse => {

  const errorSources: TErrorSources = [
    {
      path: Object.keys(err.keyValue)[0],
      message: `${Object.values(err.keyValue)[0]} already exists`,
    },
  ];

  return {
    statusCode: StatusCodes.CONFLICT,
    message: "Duplicate Field Error",
    errorSources,
  };
};