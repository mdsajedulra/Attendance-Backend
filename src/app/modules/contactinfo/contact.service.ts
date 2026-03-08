import { IContactInfo } from "./contact.interface";
import contactInfoModel from "./contactInfo.model";

const createContactInfo = (payload: IContactInfo) => {
  const result = contactInfoModel.create(payload);
  return result;
};

const getContactInfo = async () => {
  const result = await contactInfoModel.find();
  return result;
};

const updateContactInfo = async (payload: IContactInfo) => {
  const result = await contactInfoModel.findByIdAndUpdate(
    "69ad2c601c7bdf3060faaf8e",
    payload,
    { new: true },
  );
  return result;
};

export const contactInfoService = {
  createContactInfo,
  getContactInfo,
  updateContactInfo,
};
