import Usuario from "../../../models/usuarioModel.js";
import usuariosHelpers from "../../../helpers/usuarios/index.js";

const login = async (usuario) => {
    const usuarioCheck = await Usuario.findOne({ where: { email: usuario.email } })

    if (!usuarioCheck) {
        return new Error("Dados incorretos ou usuário não cadastrado")
    }

    bcrypt.compare(senha, usuarioCheck.senha, async (err) => {
        if (err) {
            return new Error("Senha incorreta")
        }

        const createToken = await usuariosHelpers.createToken(usuarioCheck, req, res)

        if (!createToken) {
            return new Error("Erro interno")
        }
    });
}

export default login