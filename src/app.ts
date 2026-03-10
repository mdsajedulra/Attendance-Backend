import express, { Application, Request, Response } from "express";

import cors from "cors";
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";

const app: Application = express();
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://localhost:8081",
  "http://192.168.0.105:8081",
  "http://192.168.0.105:19000",
  "http://192.168.0.105",
  "https://admin-dashboard-gamma-inky-62.vercel.app",

];

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: "SFP Server Running" });
});

// unknown route error handle

app.use(globalErrorHandler);
app.use(notFound);

export default app;
