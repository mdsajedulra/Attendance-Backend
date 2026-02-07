import { ISpot, ISpotLogin } from "./spot.interface";
import spotModel from "./spot.model";

const createSpot = async (payload: ISpot) => {
  const result = await spotModel.create(payload);
  return result;
};
const spotLogin = async (payload: ISpotLogin) => {
  console.log(payload);
  const spot = await spotModel.find({
    spotCode: payload.spotCode,
  });
  if (spot.length === 0) {
    throw new Error("Spot Not Found");
  }
  if (spot[0].password !== payload.password) {
    throw new Error("Invalid Password");
  }

  console.log(spot);
  return spot[0];
};

// get all spots

const getAllSpot = async () => {
  const result = await spotModel.find();
  return result;
};

export const spotService = {
  createSpot,
  spotLogin,
  getAllSpot,
};
