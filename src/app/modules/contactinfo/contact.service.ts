import { IContactInfo } from "./contact.interface";
import contactInfoModel from "./contactInfo.model";

const createContactInfo = (payload: IContactInfo) => {
  const result = contactInfoModel.create(payload);
  return result;
};

const getContactInfo = async () => {
  const result = await contactInfoModel.findOne();
  return result;
};

const updateContactInfo = async (payload: IContactInfo) => {
  const result = await contactInfoModel.findByIdAndUpdate(
    payload.id,
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
