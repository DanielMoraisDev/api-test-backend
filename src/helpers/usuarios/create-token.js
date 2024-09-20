import jwt from "jsonwebtoken";

const createToken = async (usuario, req, res) => {
  try {
    const token = jwt.sign(
      {
        id: usuario.usuario_id,
        nome: usuario.nome,
      },
      process.env.JWT_PASSWORD
    );

    console.log("[HELPERS] [USUARIO] [CREATE TOKEN] Token: " + token)

    return true
  } catch (error) {
    console.error("[HELPERS] [USUARIO] [CREATE TOKEN] Error: " + error);
    return false
  }
};

export default createToken;