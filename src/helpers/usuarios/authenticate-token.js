import "dotenv/config"

import jwt from "jsonwebtoken";

export const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
  
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_PASSWORD, (err, decoded) => {
      if (err) return res.send(err);
      req.user = decoded;
      next();
    });

    console.log("[HELPERS] [USUARIOS] [AUTHENTICATE TOKEN] Sucesso: logado")
  } catch (error) {
    console.error("[HELPERS] [USUARIOS] [AUTHENTICATE TOKEN] Error: " + error)
  }
};

export default authenticateToken