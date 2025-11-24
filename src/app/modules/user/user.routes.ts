import { Router } from "express";

import validateRequest from "../../middlewares/validateRequest";

import auth from "../../middlewares/auth";
import { userValidation } from "./user.validation";
import { userController } from "./user.controller";

const userRoute = Router();

userRoute.post(
  "/register",
  validateRequest(userValidation.UserSchema),
  userController.createUser
);
userRoute.post(
  "/create-operator",
  validateRequest(userValidation.OperatorSchema),
  userController.createOperator
);

userRoute.get("/", userController.getAllUser);
userRoute.patch("/:userId", auth("admin"), userController.blockUser);
userRoute.get("/", userController.getAllUser);

export default userRoute;
