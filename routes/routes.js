const express = require("express");
const transactionRouter = express.Router();
const {
  getTransactionById,
  getTransactions,
  postTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactionsController");

//GET
transactionRouter.get("/byId/:id", getTransactionById);

transactionRouter.get("/:period", getTransactions);

//POST
transactionRouter.post("/", postTransaction);

//PUT
transactionRouter.put("/", updateTransaction);

//DELETE
transactionRouter.delete("/:id", deleteTransaction);

module.exports = transactionRouter;
