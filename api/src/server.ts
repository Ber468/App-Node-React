import express, { Request, Response } from "express";
import "express-async-errors";
import { ErrorMiddleware } from "./middlewares/error";
import routes from "./routes/routes";

const app = express();

//Configuração do express para receber requisições em JSON
app.use(express.json());

//Rotas
app.use(routes);

//Middleware de tratamento de erros
app.use(ErrorMiddleware);

//Iniciando o servidor
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
