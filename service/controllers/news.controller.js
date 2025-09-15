import { sql } from "../server.js";

export const newsController = {
  getAllNews: async (_, res) => {
    try {
      const header = await sql.query(
        "SELECT * FROM website_headers WHERE id = $1",
        [4]
      );
      const response = await sql.query("SELECT * FROM news");

      res.status(200).json({
        success: true,
        data: { header: header.rows, news: response.rows },
      });
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
      const response = await sql.query("SELECT * FROM news WHERE id = $1", [
        id,
      ]);

      if (response.rows.length === 0) {
        return res.status(404).json({ error: "News not found" });
      }

      res.status(200).json(response.rows[0]);
    } catch (error) {
      console.error("Error fetching news:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateNews: async (req, res) => {
    const id = req.params.id;
    const {
      entitle,
      mntitle,
      endescription,
      mndescription,
      enjournalist,
      mnjournalist,
      image_url,
      thumbnail,
    } = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    try {
      const response = await sql.query(
        `UPDATE news 
         SET entitle = $1, 
             mntitle = $2,
             endescription = $3,
             mndescription = $4,
             enjournalist = $5,
             mnjournalist = $6,
             image_url = $7,
             thumbnail = $8
         WHERE id = $9
         RETURNING *`,
        [
          entitle,
          mntitle,
          endescription,
          mndescription,
          enjournalist,
          mnjournalist,
          image_url,
          thumbnail,
          id,
        ]
      );

      res.status(200).json({ success: true, data: response.rows[0] });
    } catch (error) {
      console.error("Error updating news:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createNews: async (req, res) => {
    const {
      entitle,
      mntitle,
      endescription,
      mndescription,
      enjournalist,
      mnjournalist,
      image_url,
      thumbnail,
    } = req.body;
    const date = new Date();

    try {
      const response = await sql.query(
        `INSERT INTO news(entitle, mntitle, endescription, mndescription, enjournalist, mnjournalist, image_url, thumbnail, date) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
         RETURNING *`,
        [
          entitle,
          mntitle,
          endescription,
          mndescription,
          enjournalist,
          mnjournalist,
          image_url,
          thumbnail,
          date,
        ]
      );
      res.status(201).json(response.rows[0]);
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
      await sql.query("DELETE FROM news WHERE id = $1", [id]);
      res.status(200).json({ message: "News deleted successfully" });
    } catch (error) {
      console.error("Error deleting news:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getPaginatedNews: async (req, res) => {
    try {
      const header = await sql.query(
        "SELECT * FROM website_headers WHERE id = $1",
        [4]
      );
      const data = await sql.query(
        `SELECT id, entitle, mntitle, endescription, mndescription, thumbnail, date 
         FROM news 
         ORDER BY date DESC`
      );

      const countResult = await sql.query(
        "SELECT COUNT(*)::int as count FROM news"
      );

      res.status(200).json({
        header: header.rows,
        data: data.rows,
        total: countResult.rows[0].count,
      });
    } catch (error) {
      console.error("Error fetching paginated news:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
