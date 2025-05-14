import express from "express";
import { messageController } from "../controllers/messages.controller.js";

const router = express.Router();

router.get("/messages", messageController.getAllMessages);
router.post("/createMessage", messageController.createMessage);

export default router;
