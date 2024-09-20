import "dotenv/config";
import conn from "./config/conn.js";
import express, { json } from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

import usuariosRouter from "./routes/usuariosRouter.js";

app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

conn
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log("[APP] Servidor rodando na porta " + PORT);
    });
  })
  .catch((error) => {
    console.error("[APP] Error: " + error);
  });

app.use("/", usuariosRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Página não encontrada",
  });
});
