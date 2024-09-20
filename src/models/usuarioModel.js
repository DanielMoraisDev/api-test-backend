import conn from "../config/conn.js";
import { DataTypes } from "sequelize";

const table_mysql = "usuarios";

const Usuario = conn.define(
  table_mysql,
  {
    usuario_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      required: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
  },
  {
    tableName: table_mysql,
  }
);

export default Usuario