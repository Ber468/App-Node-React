import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

const listTransactionsController = async (re: Request, res: Response) => {
  // Busca no banco de dados todas as transações
  const transactions = await prismaClient.transaction.findMany();

  // Retorna a lista de transações
  return res.json(transactions);
};

export { listTransactionsController };
