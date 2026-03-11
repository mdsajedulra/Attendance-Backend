import { Error } from "mongoose";

export const handleCastError = (err: Error.CastError) => {
  return {
    statusCode: 400,
    message: "Invalid ID",
    errorSources: [
      {
        path: err.path,
        message: err.message,
      },
    ],
  };
};