import mongoose, { Schema } from "mongoose";
import { IContactInfo } from "./contact.interface";

const contactInfoSchema: Schema = new Schema({
    email: { type: String, required: false },
    waNumber: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    message: { type: String, required: true },
}, { timestamps: true });


export default mongoose.model<IContactInfo>("ContactInfo", contactInfoSchema);
