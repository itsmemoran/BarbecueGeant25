import express from "express";
import { createTicket, getMyTicket } from "../controllers/ticketController.js";
const router = express.Router();

router.post("/create/:userId", createTicket);
router.get("/:userId", getMyTicket);

export default router;
