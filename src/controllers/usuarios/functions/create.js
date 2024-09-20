import Usuario from "../../../models/usuarioModel.js";
import bcrypt from "bcrypt";

const create = async (usuario) => {

  const saltRounds = 10;

  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      return "Error interno";
    }

    bcrypt.hash(usuario.senha, salt, async (err, hash) => {
      if (err) {
        return "Error ao criptografar senha";
      }

      const novaUsuario = {
        nome: usuario.nome,
        email: usuario.email,
        senha: hash,
      };

      const verifyEmail = await Usuario.findOne({ where: { email: novaUsuario.email } })

      if (!verifyEmail) {
        return "Esse email já está cadastrado";
      }

      const usuarioCreated = await Usuario.create(novaUsuario);

      if (!usuarioCreated) {
        return "Erro ao criar usuário";
      }

      return "Usuário criado com sucesso";
    });
  });
};

export default create;
