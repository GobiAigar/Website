import { sql } from "../server.js";

export const websiteController = {
  getAllWebsites: async (_, res) => {
    try {
      const hero = await sql.query(
        `SELECT * FROM website_headers WHERE id = 1`
      );
      const response = await sql.query(`SELECT * FROM website ORDER BY ID asc`);

      res.status(200).json({
        success: true,
        data: { hero, response },
      });
    } catch (error) {
      console.error("Error fetching websites:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createWebsite: async (req, res) => {
    let {
      title,
      entitle,
      mntitle,
      endescription,
      mndescription,
      image_url1,
      image_url2,
      image_url3,
      image_url4,
    } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    entitle = entitle ?? null;
    mntitle = mntitle ?? null;
    endescription = endescription ?? null;
    mndescription = mndescription ?? null;
    image_url1 = image_url1 ?? null;
    image_url2 = image_url2 ?? null;
    image_url3 = image_url3 ?? null;
    image_url4 = image_url4 ?? null;

    try {
      const response = await sql.query(
        `INSERT INTO website(title,entitle,mntitle,endescription,mndescription, image_url1,image_url2,image_url3,image_url4) VALUES (${title},${entitle}, ${mntitle},${endescription},${mndescription},${image_url1},${image_url2},${image_url3},${image_url4}) RETURNING *`
      );
      res.status(201).json(response);
    } catch (error) {
      console.error("Error creating website:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateWebsite: async (req, res) => {
    const id = req.params.id;
    let {
      entitle,
      mntitle,
      endescription,
      mndescription,
      image_url1,
      image_url2,
      image_url3,
      image_url4,
    } = req.body;

    if (!id) return res.status(400).json({ error: "id is required" });

    try {
      const query = `
      UPDATE website
      SET entitle = $1,
          mntitle = $2,
          endescription = $3,
          mndescription = $4,
          image_url1 = $5,
          image_url2 = $6,
          image_url3 = $7,
          image_url4 = $8
      WHERE id = $9
      RETURNING *;
    `;

      const values = [
        entitle ?? null,
        mntitle ?? null,
        endescription ?? null,
        mndescription ?? null,
        image_url1 ?? null,
        image_url2 ?? null,
        image_url3 ?? null,
        image_url4 ?? null,
        id,
      ];

      const response = await sql.query(query, values);

      res.status(200).json(response.rows[0]);
    } catch (error) {
      console.error("Error updating website:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
