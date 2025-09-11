import { sql } from "../server.js";
export const productController = {
  get: async (_, res) => {
    try {
      const hero = await sql.query(
        `SELECT * FROM website_headers WHERE id = 2`
      );
      const response = await sql.query(`SELECT * FROM products order by id`);
      res.status(200).json({ success: true, data: { hero, response } });
    } catch (error) {
      res.status(500).json({ success: false, error: error });
    }
  },

  post: async (req, res) => {
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

    try {
      const response = await sql.query(
        `INSERT INTO products(title,entitle,mntitle,endescription,mndescription, image_url1, image_url2, image_url3, image_url4) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
        [
          title,
          entitle,
          mntitle,
          endescription,
          mndescription,
          image_url1,
          image_url2,
          image_url3,
          image_url4,
        ]
      );
      res.status(201).json(response);
    } catch (error) {
      console.error("Error creating website:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  put: async (req, res) => {
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

    try {
      const response = await sql.query(
        `UPDATE products 
      SET entitle = $1, mntitle = $2, endescription = $3, mndescription = $4, image_url1 = $5, image_url2 = $6, image_url3 = $7, image_url4 = $8
       WHERE id = $9 RETURNING *`,
        [
          entitle,
          mntitle,
          endescription,
          mndescription,
          image_url1,
          image_url2,
          image_url3,
          image_url4,
          id,
        ]
      );
      res.status(201).json({ success: true, data: response });
    } catch (error) {
      console.error("Error creating website:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
