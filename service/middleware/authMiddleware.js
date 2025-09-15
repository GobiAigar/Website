import jwt from "jsonwebtoken";
import { sql } from "../server.js";

export const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ error: "Access token missing" });
  }

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7)
    : authHeader;

  try {
    // Verify JWT
    const decoded = jwt.verify(token, process.env.JSON_WEB_TOKEN_SECRET_KEY);

    // Check user exists in DB
    const { rows } = await sql.query(
      `SELECT * FROM users WHERE username = $1 LIMIT 1`,
      [decoded.username]
    );
    if (rows.length === 0) {
      return res.status(401).json({ error: "User not found" });
    }
    const user = rows[0];
    // Optional: check ID match
    if (decoded.user_id !== user.id) {
      return res.status(403).json({ error: "Token does not match user" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("JWT auth error:", error);
    return res.status(403).json({ error: "Invalid or expired token" });
  }
};

export const authenticateIfNotGet = (req, res, next) => {
  if (req.method === "GET") {
    return next();
  }

  if (req.method === "POST" && req.path === "/user") {
    return next();
  }
  if (req.method === "POST" && req.path === "/messages") {
    return next();
  }

  return authenticateToken(req, res, next);
};
