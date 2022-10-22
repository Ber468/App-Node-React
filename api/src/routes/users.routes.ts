import { Router } from "express";
import { createUsersController } from "../controllers/users/createUsersController";
import { deleteUsersController } from "../controllers/users/deleteUsersController";
import { findByIdUsersController } from "../controllers/users/findByIdUsersController";
import { listUsersController } from "../controllers/users/listUsersController";
import { updateUsersController } from "../controllers/users/updateUsersController";

const usersRoutes = Router();

/**
 * @openapi
 * /users:
 *  get:
 *   tags: [Usuários]
 *   summary: Busca todos os usuários
 *   description: Busca todos os usuários cadastrados no banco de dados
 *   responses:
 *    200:
 *     description: Listagem dos usuários
 */
usersRoutes.get("/", listUsersController);

usersRoutes.post("/create", createUsersController);

usersRoutes.put("/update", updateUsersController);

usersRoutes.delete("/delete", deleteUsersController);

usersRoutes.get("/findById/:id", findByIdUsersController);

export default usersRoutes;
