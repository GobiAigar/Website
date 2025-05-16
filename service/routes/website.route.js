import express from "express";
import { websiteController } from "../controllers/website.controller.js";

const websiteRouter = express.Router();

websiteRouter.get("/website", websiteController.getAllWebsites);
websiteRouter.post("/createWebsite", websiteController.createWebsite);
websiteRouter.put("/updateWebsite", websiteController.updateWebsite);

export default websiteRouter;
