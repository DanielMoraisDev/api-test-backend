import login from "./functions/login.js";

const loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

  if (!email) {
    return res.status(500).json({ message: "O email é necessário" });
  }

  if (!senha) {
    return res.status(500).json({ message: "A senha é necessária" });
  }

  const usuario = {
    senha: senha,
    email: email
  }

  try {
    const loginUsuario = await login(usuario);

    if (!loginUsuario) {
      return res.status(500).json("Não foi possivel logar o usuário");
    }

    return res.status(201).json({ message: "Usuário logado" });
  } catch (error) {
    console.error("[CONTROLLER] [USUARIOS] [LOGIN] Error: " + error);
  }
};

export default loginUsuario;
