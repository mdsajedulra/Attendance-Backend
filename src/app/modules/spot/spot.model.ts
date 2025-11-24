import mongoose, { Schema } from "mongoose";
import { ISpot } from "./spot.interface";

const AddressSchema: Schema = new Schema({
  village: { type: String, required: true },
  union: { type: String, required: true },
  upozila: { type: String, required: true },
  district: { type: String, required: true },
  googleLocation: { type: String, required: false },
});

const SpotSchema: Schema = new Schema(
  {
    spotName: { type: String, required: true },
    spotCode: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    concernMobileNumber: { type: String, required: true },
    totalEmployees: { type: Number, required: true },
    address: { type: AddressSchema, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<ISpot>("Spot", SpotSchema);
