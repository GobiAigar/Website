import { sql } from "../server.js";
export const websiteController = {
  getAllWebsites: async (_, res) => {
    try {
      const response = await sql`SELECT * FROM website`;
      res.status(200).json(response);
    } catch (error) {
      console.error("Error fetching websites:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createWebsite: async (req, res) => {
    let {
      title,
      english,
      mongolia,
      image_url1,
      image_url2,
      image_url3,
      image_url4,
    } = req.body;

    english = english ?? null;
    mongolia = mongolia ?? null;
    image_url1 = image_url1 ?? null;
    image_url2 = image_url2 ?? null;
    image_url3 = image_url3 ?? null;
    image_url4 = image_url4 ?? null;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    try {
      const response =
        await sql`INSERT INTO website(title,english,mongolia, image_url1,image_url2,image_url3,image_url4) VALUES (${title},${english}, ${mongolia},${image_url1},${image_url2},${image_url3},${image_url4}) RETURNING *`;
      res.status(201).json(response);
    } catch (error) {
      console.error("Error creating website:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateWebsite: async (req, res) => {
    let {
      title,
      english,
      mongolia,
      image_url1,
      image_url2,
      image_url3,
      image_url4,
    } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    english = english ?? null;
    mongolia = mongolia ?? null;
    image_url1 = image_url1 ?? null;
    image_url2 = image_url2 ?? null;
    image_url3 = image_url3 ?? null;
    image_url4 = image_url4 ?? null;

    try {
      const response =
        await sql`UPDATE website SET english = ${english}, mongolia =${mongolia}, image_url1 = ${image_url1}, image_url2 = ${image_url2}, image_url3 = ${image_url3}, image_url4 = ${image_url4} WHERE title = ${title} RETURNING *`;

      res.status(201).json(response);
    } catch (error) {
      console.error("Error creating website:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
