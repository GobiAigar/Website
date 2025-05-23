import { sql } from "../server.js";
export const newsController = {
  getAllNews: async (_, res) => {
    try {
      const response = await sql`SELECT * FROM news`;
      res.status(200).json(response);
    } catch (error) {
      console.error("Error fetching news:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getByIdNews: async (req, res) => {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }
    try {
      const response = await sql`SELECT * FROM news WHERE id = ${id}`;
      res.status(200).json(response);
    } catch (error) {
      console.error("Error fetching news:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createNews: async (req, res) => {
    
    let {
      entitle,
      mntitle,
      endescription,
      mndescription,
      enjournalist,
      mnjournalist,
      image_url,
    } = req.body;
    const date = new Date();

    try {
      const response =
        await sql`INSERT INTO news(entitle, mntitle, endescription, mndescription, enjournalist,mnjournalist, image_url, date) VALUES (${entitle}, ${mntitle}, ${endescription}, ${mndescription}, ${enjournalist},${mnjournalist}, ${image_url}, ${date}) RETURNING *`;
      res.status(201).json(response);
    } catch (error) {
      console.error("Error creating news:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteNews: async (req, res) => {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    try {
      const response = await sql`DELETE FROM news WHERE id = ${id}`;
      res.status(200).json({ message: "News deleted successfully" });
    } catch (error) {
      console.error("Error deleting news:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
