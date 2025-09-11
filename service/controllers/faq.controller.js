import { sql } from "../server.js";

export const faqController = {
  get: async (_, res) => {
    try {
      const response = await sql.query(`SELECT * FROM faq`);
      res.status(200).json(response);
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getHeader: async (_, res) => {
    try {
      const response = await sql.query(
        `SELECT * FROM website_headers WHERE id = 6`
      );
      res.status(200).json(response);
    } catch {
      console.log("error", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  postFaq: async (req, res) => {
    const { mnquestion, enquestion, mnanswer, enanswer } = req.body;
    try {
      const response = await sql.query(
        `INSERT INTO faq(mnquestion,enquestion,mnanswer,enanswer) VALUES($1,$2,$3,$4) RETURNING *`,
        [mnquestion, enquestion, mnanswer, enanswer]
      );
      res.status(200).json(response);
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  updateFaq: async (req, res) => {
    const id = req.params.id;
    const { mnquestion, enquestion, mnanswer, enanswer } = req.body;

    try {
      const response = await sql.query(
        `UPDATE faq
    SET 
    mnquestion = $1,
      enquestion = $2, 
      mnanswer = $3,
      enanswer = $4 
      WHERE id = $5 
      RETURNING *`,
        [mnquestion, enquestion, mnanswer, enanswer, id]
      );

      res.status(200).json(response);
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  deleteFaq: async (req, res) => {
    const id = req.params.id;

    try {
      const response = await sql.query(`DELETE FROM faq WHERE id = $1`, [id]);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
