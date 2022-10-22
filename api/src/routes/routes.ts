import { Router } from "express";
import usersRoutes from "./users.routes";
import { loginController } from "../controllers/authentication/loginController";
import { transactionsRoutes } from "./transactions.routes";
import { JwtMiddleware } from "../middlewares/jwt";
import { logoutController } from "../controllers/authentication/logoutController";
import { cnpjController } from "../service/cnpjController";
import cors from "cors";

const routes = Router();

// Liberar origens das requisições
routes.use(cors({ origin: "*" }));

//Rota para ver se a api está funcionando
routes.get("/", (req, res) => {
  res.send("Hello!");
});

//Rota de login
routes.post("/login", loginController);

// Rota para o CRUD de usuários
routes.use("/users", usersRoutes);

// Filtro de autenticação
routes.use(JwtMiddleware);

// Endpoint para buscar dados do cnpj especificado
routes.get("/cnpj/:cnpj", cnpjController);

// Rota logout
routes.post("/logout", logoutController);

// Rota para o CRUD de transações
routes.use("/transactions", transactionsRoutes);

export default routes;
