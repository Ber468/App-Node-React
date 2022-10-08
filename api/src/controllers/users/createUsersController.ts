import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";

const createUsersController = async (req: Request, res: Response) => {
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

  res.json(createdUser);
};

export { createUsersController };
