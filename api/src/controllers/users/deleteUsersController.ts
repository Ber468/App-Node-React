import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";

const deleteUsersController = async (req: Request, res: Response) => {
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
};

export { deleteUsersController };
