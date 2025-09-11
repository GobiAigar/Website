import { sql } from "../server.js";

export const companyController = {
  get: async (_, res) => {
    try {
      const response = await sql.query(`SELECT * FROM company ORDER BY id ASC`);
      res.status(200).json(response);
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  postFaq: async (req, res) => {
    const { title, english, mongolia } = req.body;
    try {
      const response = await sql.query(
        `INSERT INTO company( title, english, mongolia) VALUES($1,$2,$3) RETURNING *`,
        [title, english, mongolia]
      );
      res.status(200).json(response);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Бааз дээр алдаа гарлаа та баазаа шалгана уу" });
    }
  },
  updateCompany: async (req, res) => {
    const id = req.params.id;
    const { title, english, mongolia } = req.body;

    try {
      const response = await sql.query(
        `UPDATE company
    SET 
    title = $1,
      english = $2, 
      mongolia = $3
      WHERE id = $4
      RETURNING *`,
        [title, english, mongolia, id]
      );

      res.status(200).json(response);
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
