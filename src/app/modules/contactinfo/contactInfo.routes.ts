import { Router } from "express";
import { contactInfoController } from "./contactInfo.controller";

const contactInfoRouter = Router();

// contactInfoRouter.get("/", (req, res)=> res.send("Contact info route is working")  )



contactInfoRouter.post("/", contactInfoController.createContactInfo )
contactInfoRouter.get("/", contactInfoController.getContactInfo)
contactInfoRouter.patch("/", contactInfoController.updateContactInfo)
export default contactInfoRouter;
