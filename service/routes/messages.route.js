import express from "express";
import { messageController } from "../controllers/messages.controller.js";

const messageRouter = express.Router();

messageRouter.get("/messages", messageController.getAllMessages);
messageRouter.post("/createMessage", messageController.createMessage);

export default messageRouter;
