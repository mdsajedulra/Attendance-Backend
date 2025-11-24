import mongoose, { Schema } from "mongoose";
import {
  IChildAttendance,
  IComment,
  IFemaleAttendance,
  IMaleAttendance,
} from "./attendance.interface";

const AttendanceSchema: Schema = new Schema(
  {
    spotId: { type: Schema.Types.ObjectId, ref: "Spot", required: true },
    female: { type: Number, required: true },
    male: { type: Number, required: true },
    child: { type: Number, required: true },
    notes: { type: String },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

const FemaleAttendanceSchema: Schema = new Schema(
  {
    spotId: { type: Schema.Types.ObjectId, ref: "Spot", required: true },
    female: { type: Number, required: true },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

const MaleAttendanceSchema: Schema = new Schema(
  {
    spotId: { type: Schema.Types.ObjectId, ref: "Spot", required: true },
    male: { type: Number, required: true },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

const ChildAttendanceSchema: Schema = new Schema(
  {
    spotId: { type: Schema.Types.ObjectId, ref: "Spot", required: true },
    child: { type: Number, required: true },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

const CommentSchema: Schema = new Schema(
  {
    spotId: { type: Schema.Types.ObjectId, ref: "Spot", required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

const femaleAttendance = mongoose.model<IFemaleAttendance>(
  "FemaleAttendance",
  FemaleAttendanceSchema
);
const maleAttendance = mongoose.model<IMaleAttendance>(
  "MaleAttendance",
  MaleAttendanceSchema
);
const childAttendance = mongoose.model<IChildAttendance>(
  "ChildAttendance",
  ChildAttendanceSchema
);
const commentModel = mongoose.model<IComment>("Comment", CommentSchema);

export const attendanceModel = {
  femaleAttendance,
  maleAttendance,
  childAttendance,
  commentModel,
};
