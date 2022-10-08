import { Router } from "express";
import usersRoutes from "./users.routes";

const routes = Router();

//Rota para ver se a api está funcionando
routes.get("/", (req, res) => {
  res.send("Hello!");
});

routes.use("/users", usersRoutes);

export default routes;
