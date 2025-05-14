import express from "express";
import { newsController } from "../controllers/news.controller.js";

const router = express.Router();

router.get("/news", newsController.getAllNews);
router.post("/createNews", newsController.createNews);
router.delete("/deleteNews/:id", newsController.deleteNews);

export default router;
