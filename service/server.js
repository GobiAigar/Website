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
import { authenticateIfNotGet } from "./middleware/authMiddleware.js";
import { Pool } from "pg";
import helmet from "helmet";

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
  .then((res) => console.error("Connected to VPS PostgreSQL:", res.rows[0]))
  .catch((err) => console.error("PostgreSQL connection error:", err));
// export const sql = neon(`${process.env.DATABASE_URL}`);

const server = express();
const port = process.env.PORT || 8000;

server.use(cors());
server.use(bodyParser.json());

server.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [],
        scriptSrc: [],
      },
    },
    referrerPolicy: { policy: "no-referrer" },
    frameguard: { action: "deny" },
    hsts: { maxAge: 31536000 },
    noSniff: true,
    xssFilter: true,
  })
);

server.get("/", (_, res) => {
  res.send("Welcome to the server!");
});
server.use("/api/analytics", authenticateIfNotGet, analyticsRoutes);
server.use("/api", authenticateIfNotGet, websiteRouter);
server.use("/api", authenticateIfNotGet, newsRouter);
server.use("/api", authenticateIfNotGet, messageRouter);
server.use("/api", authenticateIfNotGet, userRouter);
server.use("/api", authenticateIfNotGet, faqRouter);
server.use("/api", authenticateIfNotGet, productRouter);
server.use("/api", authenticateIfNotGet, sustainabilityRouter);
server.use("/api", authenticateIfNotGet, pageHeader);
server.use("/api", authenticateIfNotGet, companyRouter);
server.use((_, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

server.listen(port, () => {
  console.error(`Server is running on port ${port}`);
});
