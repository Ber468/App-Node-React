import { Router } from "express";
import usersRoutes from "./users.routes";
import { loginController } from "../controllers/authentication/loginController";

const routes = Router();

//Rota para ver se a api está funcionando
routes.get("/", (req, res) => {
  res.send("Hello!");
});

//Rota de login
routes.post("/login", loginController);

// Rota para o CRUD de usuários
routes.use("/users", usersRoutes);

export default routes;
