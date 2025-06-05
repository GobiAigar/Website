import express from "express";
import { pageController } from "../controllers/pageheader.controller.js";

const pageHeader = express.Router();

pageHeader.get("/header", pageController.getAllHeader);
pageHeader.put("/header:id", pageController.updateHeader);

export default pageHeader;
