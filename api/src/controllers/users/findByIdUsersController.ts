import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { isNumber } from "../../utils/validations/isNumber";
import { required } from "../../utils/validations/required";

const findByIdUsersController = async (req: Request, res: Response) => {
  const params = req.params;

  required(params.id, "id");
  isNumber(params.id, "id");

  const userById = await prismaClient.user.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  res.json(userById);
};

export { findByIdUsersController };
