import { sql } from "../server.js";
export const userController = {
  checkUser: async (req, res) => {
    const {username , password} = req.body

   
    
    try {
      const user = await sql`SELECT * FROM users WHERE username = ${username}`;
     
      
      if (user.length == 0) {
        return res.status(400).json({status: "failed", message: "Хэрэглэгчийн нэр буруу байна"});
      }
      if (user[0].password != password) {
        return res.status(400).json({status: "failed", message: "Хэрэглэгчийн нууц үг буруу байна"});
      }
 
      
      return res.status(200).json(user);
    } catch (error) {
      console.error("Error fetching websites:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}