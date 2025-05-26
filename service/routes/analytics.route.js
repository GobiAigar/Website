import express from "express";
import { getAnalyticsViews } from "../controllers/analytics.controller.js";

const router = express.Router();
router.get("/views", getAnalyticsViews);
export default router;
