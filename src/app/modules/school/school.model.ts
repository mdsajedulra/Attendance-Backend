import mongoose, { Schema } from "mongoose";
import { ISchool } from "./school.interface";

const AddressSchema: Schema = new Schema({
  village: { type: String, required: true },
  union: { type: String, required: true },
  upozila: { type: String, required: true },
  district: { type: String, required: true },
  googleLocation: { type: String, required: false },
});

const SchoolSchema: Schema = new Schema(
  {
    schoolName: { type: String, required: true },
    schoolCode: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    concernMobileNumber: { type: String, required: true },
    totalEmployees: { type: Number, required: true },
    address: { type: AddressSchema, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<ISchool>("School", SchoolSchema);
