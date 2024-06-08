import express from "express";
import {
  getAllRequest,
  sendRequest,
  deleteRequest,
} from "../controller/requestController.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/request", sendRequest);
router.get("/getall", isAuthenticated, getAllRequest);
router.delete("/:id", isAuthenticated, deleteRequest);
export default router;
