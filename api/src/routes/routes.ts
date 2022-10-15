import { Router } from "express";
import usersRoutes from "./users.routes";
import { loginController } from "../controllers/authentication/loginController";
import { transactionsRoutes } from "./transactions.routes";
import { JwtMiddleware } from "../middlewares/jwt";

const routes = Router();

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

// Rota para o CRUD de transações
routes.use("/transactions", transactionsRoutes);

export default routes;
