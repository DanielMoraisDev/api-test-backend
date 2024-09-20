import { Router } from "express";
const usuariosRouter = Router();

import usuariosController from "../controllers/usuarios/usuariosController.js";
import usuariosHelpers from "../helpers/usuarios/index.js";

usuariosRouter.post(
  "/register",  
  usuariosController.create
);

usuariosRouter.post(
  "/login",
  usuariosHelpers.authenticateToken,
  usuariosController.login
);

usuariosRouter.get("/list", usuariosController.getAll);

export default usuariosRouter;
