import { sql } from "../server.js";
import { sendCollabrationEmail } from "../utils/mail.js";

export const messageController = {
  web: async (_, res) => {
    try {
      const { rows } = await sql.query(
        `SELECT * FROM website_headers WHERE id = $1`,
        [5]
      );
      res.status(200).json({ status: "success", data: rows[0] });
    } catch (error) {
      console.error("Error fetching website header:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getAllMessages: async (_, res) => {
    try {
      const { rows } = await sql.query(
        `SELECT * FROM messages ORDER BY date DESC`
      );
      res.status(200).json({ status: "success", data: rows });
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getByIdMessages: async (req, res) => {
    const { id } = req.params;
    try {
      const { rows } = await sql.query(`SELECT * FROM messages WHERE id = $1`, [
        id,
      ]);

      if (rows.length === 0) {
        return res
          .status(404)
          .json({ status: "failed", message: "Message not found" });
      }

      res.status(200).json({ status: "success", data: rows[0] });
    } catch (error) {
      console.error("Error fetching message by ID:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createMessage: async (req, res) => {
    const { phonenumber, firstname, email, plan } = req.body;
    const date = new Date();

    try {
      const { rows } = await sql.query(
        `INSERT INTO messages (phonenumber, firstname, email, plan, date)
         VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [phonenumber, firstname, email, plan, date]
      );

      // Send email only after successful insertion
      // try {
      //   await sendCollabrationEmail(phonenumber, email, firstname, plan);
      // } catch (emailError) {
      //   console.error("Email sending failed:", emailError);
      //   // continue, since message is still stored
      // }

      res.status(201).json({ status: "success", data: rows[0] });
    } catch (error) {
      console.error("Error creating message:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteMessages: async (req, res) => {
    const { id } = req.params;

    try {
      const response = await sql.query(`DELETE FROM messages WHERE id = $1`, [
        id,
      ]);
      res.status(200).json({
        status: "success",
        message: "Message deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting message:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
