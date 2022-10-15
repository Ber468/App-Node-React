import { Router } from "express";
import { createTransactionsController } from "../controllers/transactions/createTransactionsController";
import { listTransactionsController } from "../controllers/transactions/listTransactionsController";

const transactionsRoutes = Router();

// Listando todas as transações
transactionsRoutes.get("/", listTransactionsController);

// Criando uma nova transação
transactionsRoutes.post("/create", createTransactionsController);

export { transactionsRoutes };
