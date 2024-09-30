import Usuario from "../../../models/usuarioModel.js";

const getAll = async (req) => {
  let page = 1;

  if (req) {
    page = parseInt(req.query.page);
  }

  const limit = 3;
  const offset = (page - 1) * limit;

  const usuarios = await Usuario.findAndCountAll({
    limit,
    offset,
  });

  const totalPaginas = Math.ceil(usuarios.count / limit);
  const allUsuarios = {
    totalUsuarios: usuarios.count,
    totalPaginas,
    itemsPorPagina: limit,
    paginaAtual: page,
    usuarios: usuarios.rows,
    proximaPagina:
      totalPaginas === 0
        ? null
        : `http://localhost:${process.env.PORT}/usuarios?page=${page + 1}`,
    paginaAnterior:
      totalPaginas === 0
        ? null
        : `http://localhost:${process.env.PORT}/usuarios?page=${page - 1}`,
  };

  return allUsuarios;
};

export default getAll;
