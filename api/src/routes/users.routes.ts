import { Router } from "express";
import { prismaClient } from "../database/prismaClient";

const usersRoutes = Router();

//Endpoint para buscar todos os usuários
usersRoutes.get("/", async (req, res) => {
  const userList = await prismaClient.user.findMany();

  //Retorna a lista de usuários
  return res.json(userList);
});

//Endpoint para criar usuário
usersRoutes.post("/create", async (req, res) => {
  const user = req.body;

  console.log(user);

  const createdUser = await prismaClient.user.create({
    data: {
      nome: user.name,
      email: user.email,
      password: user.password,
    },
  });

  //Retornando o usuário criado
  res.json(createdUser);
});

//Endpoint para editar um usuário
usersRoutes.put("/update", (req, res) => {
  res.send("Atualizando um usuário");
});

//Endpoint para deletar um usuário
usersRoutes.delete("/delete", (req, res) => {
  res.send("Deletando um usuário");
});

//Endpoint para buscar um usuário pelo id
usersRoutes.get("/findById/:id", (req, res) => {
  res.send("Buscando um usuário pelo id");
});

export default usersRoutes;
