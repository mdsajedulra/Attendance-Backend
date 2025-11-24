import { Router } from "express";
import { spotController } from "./spot.controller";

const spotRouter = Router();

spotRouter.post("/", spotController.createSpot);
spotRouter.post("/spot-login", spotController.spotLogin);

export default spotRouter;
