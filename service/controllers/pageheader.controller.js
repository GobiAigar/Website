import { sql } from "../server.js";

export const pageController = {
  getAllHeader: async (_, res) => {
    try {
      const response = await sql`SELECT * FROM website_headers ORDER BY ID asc`;

      res.status(200).json({ header: response });
    } catch (error) {
      console.error("Error fetching websites:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateHeader: async (req, res) => {
    const id = req.params.id;
    let { entitle, mntitle, ensubtitle, mnsubtitle, image_url } = req.body;

    if (!id) {
      return res.status(400).json({ error: "id is required" });
    }

    entitle = entitle ?? null;
    mntitle = mntitle ?? null;
    ensubtitle = ensubtitle ?? null;
    mnsubtitle = mnsubtitle ?? null;
    image_url = image_url ?? null;

    try {
      const response =
        await sql`UPDATE website SET entitle=${entitle}, mntitle=${mntitle}, ensubtitle=${ensubtitle}, mnsubtitle=${mnsubtitle},image_url1=${image_url1}, image_url2 = ${image_url2}, image_url3 = ${image_url3}, image_url4 = ${image_url4} WHERE id = ${id} RETURNING *`;

      res.status(201).json(response);
    } catch (error) {
      console.error("Error creating website:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
