import { sql } from "../server.js";

export const sustainabilityController = {
  // ---------------- GET ALL ----------------
  getAll: async (_, res) => {
    try {
      const title = await sql.query(
        `SELECT * FROM sustainability WHERE id = 1`
      );
      const certificates = await sql.query(
        `SELECT * FROM sustainability WHERE id != 1`
      );
      const hero = await sql.query(
        `SELECT * FROM website_headers WHERE id = 3`
      );
      return res.status(200).json({
        success: true,
        hero: hero.rows[0],
        response: {
          title: title.rows[0],
          certificates: certificates.rows,
        },
      });
    } catch (error) {
      console.error("Error fetching websites:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // ---------------- CREATE ----------------
  post: async (req, res) => {
    const { entitle, image_url1 } = req.body;

    const date = new Date();

    try {
      const query = `
        INSERT INTO sustainability
          (entitle, image_url1, date)
        VALUES ($1, $2, $3)
        RETURNING *;
      `;

      const values = [entitle ?? null, image_url1 ?? null, date];

      const response = await sql.query(query, values);
      return res.status(201).json({ success: true, data: response.rows[0] });
    } catch (error) {
      console.error("Error inserting sustainability:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // ---------------- UPDATE ----------------
  update: async (req, res) => {
    const id = req.params.id;
    const {
      entitle,
      mntitle,
      endescription,
      mndescription,
      image_url1,
      image_url2,
    } = req.body;

    const date = new Date();

    try {
      const query = `
        UPDATE sustainability
        SET entitle = $1,
            mntitle = $2,
            endescription = $3,
            mndescription = $4,
            image_url1 = $5,
            image_url2 = $6,
            date = $7
        WHERE id = $8
        RETURNING *;
      `;

      const values = [
        entitle ?? null,
        mntitle ?? null,
        endescription ?? null,
        mndescription ?? null,
        image_url1 ?? null,
        image_url2 ?? null,
        date,
        id,
      ];

      const response = await sql.query(query, values);
      return res.status(200).json({ success: true, data: response.rows[0] });
    } catch (error) {
      console.error("Error updating sustainability:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // ---------------- DELETE ----------------
  delete: async (req, res) => {
    const id = req.params.id;

    try {
      const response = await sql.query(
        `DELETE FROM sustainability WHERE id = $1 RETURNING *`,
        [id]
      );
      return res.status(200).json({ success: true, data: response.rows[0] });
    } catch (error) {
      console.error("Error deleting sustainability:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
