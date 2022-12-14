import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { decodedToken } from "../../utils/jwtUtils";
import { required } from "../../utils/validations/required";

const createTransactionsController = async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  const tokenWithoutBearer = token?.split(" ")[1];
  const decoded = decodedToken(tokenWithoutBearer);

  console.log(decoded.id);

  // Validação dos dados
  const body = req.body;
  const { title, value, type, date } = body;

  required(decoded.id, "id");
  required(title, "title");
  required(value, "value");
  required(type, "type");
  required(date, "date");

  const transaction = await prismaClient.transaction.create({
    data: {
      title,
      value,
      type,
      date: new Date(date),
      idUser: decoded.id,
    },
  });

  res.status(201).json(transaction);
};

export { createTransactionsController };
