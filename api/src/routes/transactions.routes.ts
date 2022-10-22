import { Router } from "express";
import { createTransactionsController } from "../controllers/transactions/createTransactionsController";
import deleteTransactionsController from "../controllers/transactions/deleteTransactionsController";
import { listTransactionsController } from "../controllers/transactions/listTransactionsController";

const transactionsRoutes = Router();

// Listando todas as transações
transactionsRoutes.get("/", listTransactionsController);

// Criando uma nova transação
transactionsRoutes.post("/create", createTransactionsController);

// Deletando uma transação
transactionsRoutes.delete("/delete", deleteTransactionsController);

export { transactionsRoutes };
