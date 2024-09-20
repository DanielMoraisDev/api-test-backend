import usuariosHelpers from "../../helpers/usuarios/index.js"
import Usuario from "../../models/usuarioModel.js"

const loginUsuario = async (req, res) => {
    const { email, senha } = req.body

    try {
        const usuario = await Usuario.findOne({ where: { email: email, senha: senha } })

        if (!usuario) {
            return res.status(500).json({ message: "Dados incorretos ou usuário não cadastrado" })
        }

        const createToken = await usuariosHelpers.createToken(usuario, req, res)

        if (!createToken) {
            return res.status(500).json({ message: "Erro interno" })
        }

        res.json({ message: "Usuário logado com sucesso" })

    } catch (error) {
        console.error("[CONTROLLER] [USUARIOS] [LOGIN] Error: " + error)
    }
}

export default loginUsuario