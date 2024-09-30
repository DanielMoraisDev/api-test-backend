import create from "./functions/create.js";

const createUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome) {
    return res.status(500).json({ message: "O nome é necessário" });
  }

  if (!email) {
    return res.status(500).json({ message: "O email é necessário" });
  }

  if (!senha) {
    return res.status(500).json({ message: "A senha é necessária" });
  }

  const usuario = {
    nome: nome,
    senha: senha,
    email: email
  }

  try {
    const createUsuario = await create(usuario)

    if (!createUsuario) {
      return res.status(500).json("Não foi possivel criar o usuário")
    }

    return res.status(201).json({ message: createUsuario })
  } catch (error) {
    console.error("[CONTROLLER USUARIOS CREATE] Error: " + error);
  }
};

export default createUsuario;
