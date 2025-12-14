import express from "express";
import { sendTicket } from "../controllers/sendController.js";
const router = express.Router();

router.post("/send/:ticketId", sendTicket);

export default router;
