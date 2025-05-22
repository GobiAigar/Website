import { sql } from "../server.js";
export const productController = {
  get: async (_, res) => {
    try {
      const statistics = await sql`SELECT * FROM product order by id`
      res.status(200).json({'success': true, "data": statistics});
    } catch (error) {
      res.status(500).json({"success": false, "error": error });
    }
  },

  post: async (req, res) => {
    let {
      entitle,
      mntitle,
      endescription,
      mndescription,
      image_url,
    } = req.body;

    const date = new Date();

    try {
      const response =
        await sql`INSERT INTO product(entitle,mntitle,endescription,mndescription, image_url, date) VALUES (${entitle}, ${mntitle},${endescription},${mndescription},${image_url}, ${date}) RETURNING *`;
      res.status(201).json(response);
    } catch (error) {
      console.error("Error creating website:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  put: async (req, res) => {
    const id = req.params.id
console.log(req.body);

    let {
      entitle,
      mntitle,
      endescription,
      mndescription,
      image_url
    } = req.body;
const date = new Date()
   
    try {
      const response =
        await sql`UPDATE product SET entitle=${entitle}, mntitle=${mntitle}, endescription=${endescription}, mndescription=${mndescription},image_url=${image_url} , date=${date} WHERE id = ${id} RETURNING *`;
      res.status(201).json({success:true, data: response});
    } catch (error) {
      console.error("Error creating website:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
