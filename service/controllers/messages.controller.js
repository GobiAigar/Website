import { sql } from "../server.js";
export const messageController = {
  getAllMessages: async (_, res) => {
    try {
      const response = await sql`SELECT * FROM messages ORDER BY date DESC`;
      res.status(200).json(response);
    } catch (error) {
      console.error("Error fetching messagess:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getByIdMessages: async (req, res) => {
    const { id } = req.params;

    try {
      const response = await sql`SELECT * FROM messages WHERE id = ${id}`;
      if (response.length === 0) {
        return res.status(404).json({ error: "Message not found" });
      }
      res.status(200).json({ stattus: "success", data: response[0] });
    } catch (error) {
      console.error("Error fetching message by ID:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createMessage: async (req, res) => {
    const {
      purpose,
      firstname,
      lastname,
      email,
      phonenumber,
      country,
      state,
      city,
      bussiness,
      plan,
    } = req.body;

    const date = new Date();

    try {
      const response = await sql`INSERT INTO messages(
        purpose,
      firstname,
      lastname,
      email,
      phonenumber,
      country,
      state,
      city,
      bussiness,
      plan, date) VALUES (${purpose},${firstname},${lastname}, ${email},${phonenumber},${country},${state},${city},${bussiness},${plan},${date}) RETURNING *`;
      res.status(201).json(response);
    } catch (error) {
      console.error("Error creating messages:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
