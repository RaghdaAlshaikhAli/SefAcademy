import express from "express";
import dbConnection from "./database/dbConnection.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import requestRouter from "./router/requestRouter.js";
import userRouter from "./router/userRouter.js";

const app = express();
config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [3000, 5000],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/requests", requestRouter);
app.use("/api/v1/users", userRouter);

dbConnection();

app.use(errorMiddleware);
export default app;
