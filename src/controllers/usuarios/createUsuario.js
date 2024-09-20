import Usuario from "../../models/usuarioModel.js";

const createUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome) {
    return res.status(500).json({ message: "O nome é necessário" })
  }

  if (!email) {
    return res.status(500).json({ message: "O email é necessário" })
  }

  if (!senha) {
    return res.status(500).json({ message: "A senha é necessária" })
  }

  const novaUsuario = {
    nome,
    email,
    senha,
  };

  try {
    const usuarioCreated = await Usuario.create(novaUsuario);

    if (!usuarioCreated) {
      return res.status(500).json({ message: "Error ao criar o usuário" })
    }

    res.status(201).json({ message: "Usuário criado com sucesso" })

  } catch (error) {
    console.error("[CONTROLLER USUARIOS CREATE] Error: " + error);
  }
};

export default createUsuario;
