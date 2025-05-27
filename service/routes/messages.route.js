import express from "express";
import { messageController } from "../controllers/messages.controller.js";

const messageRouter = express.Router();

messageRouter.get("/messages", messageController.getAllMessages);
messageRouter.get("/messages/:id", messageController.getByIdMessages);
messageRouter.post("/messages", messageController.createMessage);

export default messageRouter;
