import express from "express";
import { websiteController } from "../controllers/website.controller.js";

const router = express.Router();

router.get("/website", websiteController.getAllWebsites);
router.post("/createWebsite", websiteController.createWebsite);
router.put("/updateWebsite", websiteController.updateWebsite);

export default router;
