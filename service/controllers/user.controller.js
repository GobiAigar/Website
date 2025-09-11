import { sql } from "../server.js";
import { sendEmail } from "../utils/mail.js";
import { generateOTP } from "../utils/otp.js";
import bcrypt from "bcrypt";

export const userController = {
  getUsers: async (req, res) => {
    try {
      const { rows } = await sql.query(`SELECT * FROM users`);
      return res.status(200).json(rows);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  checkUser: async (req, res) => {
    const { username, password } = req.body;

    try {
      const { rows } = await sql.query(
        `SELECT * FROM users WHERE username = $1`,
        [username]
      );

      if (rows.length === 0) {
        return res
          .status(400)
          .json({ status: "failed", message: "Хэрэглэгчийн нэр буруу байна" });
      }

      return res.status(200).json(rows[0]);
    } catch (error) {
      console.error("Error checking user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  generateOTP: async (req, res) => {
    const { email } = req.body;
    try {
      const { rows } = await sql.query(`SELECT * FROM users WHERE email = $1`, [
        email,
      ]);
      if (rows.length === 0) {
        return res.status(400).json({
          status: "failed",
          message: "Хэрэглэгчийн э-майл буруу байна",
        });
      }
      const otp = generateOTP();
      sendEmail(email, otp);

      await sql.query(
        `UPDATE users SET otp = $1, otp_created_at = now() WHERE email = $2`,
        [otp, email]
      );

      return res.status(200).json({
        status: "success",
        message: "Хэрэглэгчийн нууц үг сэргээх код илгээгдлээ",
      });
    } catch (error) {
      console.error("Error generating OTP:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updatePassword: async (req, res) => {
    const { email, otp, password } = req.body;
    try {
      const { rows } = await sql.query(`SELECT * FROM users WHERE email = $1`, [
        email,
      ]);
      if (rows.length === 0) {
        return res
          .status(400)
          .json({ status: "failed", message: "Э-мэйл буруу байна" });
      }
      if (rows[0].otp != otp) {
        return res.status(400).json({
          status: "failed",
          message: "Нэг удаагийн нууц үг буруу байна",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await sql.query(
        `UPDATE users SET password = $1, otp = null, otp_created_at = null WHERE email = $2`,
        [hashedPassword, email]
      );

      return res.status(200).json({
        status: "success",
        message: "Хэрэглэгчийн нууц үг амжилттай өөрчлөгдлөө",
      });
    } catch (error) {
      console.error("Error updating password:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  registerUser: async (req, res) => {
    const { email, username, password } = req.body;

    try {
      const { rows: existing } = await sql.query(
        `SELECT * FROM users WHERE email = $1`,
        [email]
      );
      if (existing.length > 0) {
        return res.status(400).json({
          status: "failed",
          message: "Хэрэглэгчийн имэйл хаяг аль хэдийн бүртгэгдсэн байна",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      sendEmail(email);

      const { rows } = await sql.query(
        `INSERT INTO users (email, username, password) 
         VALUES ($1, $2, $3) RETURNING *`,
        [email, username, hashedPassword]
      );

      return res.status(201).json({
        status: "success",
        message: "Хэрэглэгч амжилттай нэмэгдлээ",
        user: rows[0],
      });
    } catch (error) {
      console.error("Error adding user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteUser: async (req, res) => {
    const { id } = req.params;
    try {
      const { rowCount } = await sql.query(`DELETE FROM users WHERE id = $1`, [
        id,
      ]);
      if (rowCount > 0) {
        return res.status(200).json({
          status: "success",
          message: "Хэрэглэгч амжилттай устгагдлаа",
        });
      } else {
        return res.status(404).json({
          status: "failed",
          message: "Хэрэглэгч олдсонгүй",
        });
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
