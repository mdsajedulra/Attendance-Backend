import { IOperator, IUser } from "./user.interface";
import { Operator, User } from "./user.model";

const createUser = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};
const createOperator = async (payload: IOperator) => {
  const result = await Operator.create(payload);
  return result;
};

const getAllUser = async () => {
  const result = await User.find();
  return result;
};
// block user

const blockUser = async (userId: string) => {
  const user = await User.findById(userId);
  if (user?.isBlocked === true) {
    const result = await User.findOneAndUpdate(
      { _id: userId },
      { isBlocked: false },
      { new: true }
    );
    return result;
  }
  const result = await User.findOneAndUpdate(
    { _id: userId },
    { isBlocked: true },
    { new: true }
  );
  return result;
};

export const userService = {
  createUser,
  createOperator,
  getAllUser,
  blockUser,
};
