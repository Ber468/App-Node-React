import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";
import bcrypt from "bcrypt";

const createUsersController = async (req: Request, res: Response) => {
  const user = req.body;

  required(user.name, "nome");
  required(user.email, "email");
  required(user.password, "password");

  //Criptografando a senha do usuário
  const cryptPassword = await bcrypt.hash(user.password, 10);

  //Salvando o usuário no banco de dados
  const createdUser = await prismaClient.user.create({
    data: {
      nome: user.name,
      email: user.email,
      password: cryptPassword,
    },
  });

  res.json(createdUser);
};

export { createUsersController };
