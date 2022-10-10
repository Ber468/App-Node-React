import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";
import bcrypt from "bcrypt";

const updateUsersController = async (req: Request, res: Response) => {
  //Recebendo os dados do usuário
  const user = req.body;

  required(user.id, "id");

  //Criptografando a senha do usuário
  const cryptPassword = await bcrypt.hash(user.password || "", 10);

  const editedUser = await prismaClient.user.update({
    where: {
      id: user.id,
    },
    data: {
      nome: user.nome,
      email: user.email,
      password: user.password ? cryptPassword : undefined,
    },
  });

  res.json(editedUser);
};

export { updateUsersController };
