import { Router } from "express";
import { prismaClient } from "../database/prismaClient";
import { isNumber } from "../utils/validations/isNumber";
import { required } from "../utils/validations/required";

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

  required(user.name, "nome");
  required(user.email, "email");
  required(user.password, "password");

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
usersRoutes.put("/update", async (req, res) => {
  //Recebendo os dados do usuário
  const user = req.body;

  required(user.id, "id");

  const editedUser = await prismaClient.user.update({
    where: {
      id: user.id,
    },
    data: {
      nome: user.nome,
      email: user.email,
      password: user.password,
    },
  });

  res.json(editedUser);
});

//Endpoint para deletar um usuário
usersRoutes.delete("/delete", async (req, res) => {
  //Recebendo o id do usuário a ser deletado
  const user = req.body;

  required(user.id, "id");

  //Deletando o usuário
  const deletedUser = await prismaClient.user.delete({
    where: {
      id: user.id,
    },
  });

  res.send("Usuário deletado com sucesso!");
});

//Endpoint para buscar um usuário pelo id
usersRoutes.get("/findById/:id", async (req, res) => {
  //Recebendo o id do usuário
  const params = req.params;

  required(params.id, "id");
  isNumber(params.id, "id");

  //Buscando o usuário pelo id
  const userById = await prismaClient.user.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  res.json(userById);
});

export default usersRoutes;
