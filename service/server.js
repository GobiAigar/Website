import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
// import { neon } from "@neondatabase/serverless";
import websiteRouter from "./routes/website.route.js";
import newsRouter from "./routes/news.route.js";
import userRouter from "./routes/user.route.js";
import messageRouter from "./routes/messages.route.js";
import faqRouter from "./routes/faq.route.js";
import productRouter from "./routes/product.route.js";
import sustainabilityRouter from "./routes/sustainability.route.js";
import analyticsRoutes from "./routes/analytics.route.js";
import pageHeader from "./routes/page_header.route.js";
import { companyRouter } from "./routes/company.route.js";
import { Pool } from "pg";

dotenv.config();

export const sql = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

sql
  .query("SELECT NOW()")
  .then((res) => console.log("Connected to VPS PostgreSQL:", res.rows[0]))
  .catch((err) => console.error("PostgreSQL connection error:", err));
// export const sql = neon(`${process.env.DATABASE_URL}`);

const server = express();
const port = process.env.PORT || 8000;

server.use(cors());
server.use(bodyParser.json());

server.get("/", (_, res) => {
  res.send("Welcome to the server!");
});
server.use("/api/analytics", analyticsRoutes);
server.use("/api", websiteRouter);
server.use("/api", newsRouter);
server.use("/api", messageRouter);
server.use("/api", userRouter);
server.use("/api", faqRouter);
server.use("/api", productRouter);
server.use("/api", sustainabilityRouter);
server.use("/api", pageHeader);
server.use("/api", companyRouter);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
