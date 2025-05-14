import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { neon } from "@neondatabase/serverless";
import router from "./routes/website.route.js";

dotenv.config();
export const sql = neon(`${process.env.DATABASE_URL}`);

const server = express();
const PORT = process.env.PORT || 8000;

server.use(cors());
server.use(bodyParser.json());

server.get("/", (_, res) => {
  res.send("Welcome to the server!");
});

server.use("/api", router);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
