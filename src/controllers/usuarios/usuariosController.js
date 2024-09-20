import createUsuario from "./createUsuario.js"
import getAllUsuarios from "./getAllUsuarios.js"
import loginUsuario from "./loginUsuario.js";

const usuariosController = {
  getAll: getAllUsuarios,
  create: createUsuario,
  login: loginUsuario
};

export default usuariosController;