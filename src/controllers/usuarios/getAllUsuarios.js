import Usuario from "../../models/usuarioModel.js";

const getAllUsuarios = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 3;
  const offset = (page - 1) * limit;

  try {
    const usuarios = await Usuario.findAndCountAll({
      limit,
      offset,
    });

    const totalPaginas = Math.ceil(usuarios.count / limit);
    res.json({
      totalUsuarios: usuarios.count,
      totalPaginas,
      itemsPorPagina: limit,
      paginaAtual: page,
      usuarios: usuarios.rows,
      proximaPagina: totalPaginas === 0 ? null : `http://localhost:${process.env.PORT}/usuarios?page=${page + 1}`,
      paginaAnterior: totalPaginas === 0 ? null : `http://localhost:${process.env.PORT}/usuarios?page=${page - 1}`
    });
  } catch (error) {
    console.error("[CONTROLLER USUARIOS GET ALL] Error: " + error);
  }
};

export default getAllUsuarios;
