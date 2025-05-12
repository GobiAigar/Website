import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

const server = express();
dotenv.config();
const PORT = process.env.PORT || 8000;

server.use(cors());
server.use(bodyParser.json());

server.get("/", (_, res) => {
  res.send("Welcome to the server!");
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
