import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";

const updateUsersController = async (req: Request, res: Response) => {
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
};

export { updateUsersController };
