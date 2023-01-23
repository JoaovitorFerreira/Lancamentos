const mongoose = require("mongoose");

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require("../models/TransactionModel");

//CREATE
const saveTransactionService = async (transaction) => {
  const newTransaction = new TransactionModel(transaction);
  const result = await newTransaction.save();
  return result;
};

//GET
const getTransactionService = async (period) => {
  const result = await TransactionModel.find({ yearMonth: period }).sort({
    day: 0,
    category: 0,
    description: 0,
  });
  return { length: result.length, transactions: result };
};

//GET ONE
const getTransactionByIdService = async (id) => {
  const result = await TransactionModel.findById(id);
  return result;
};
//UPDATE
const updateTransactionService = async (transaction) => {
  await TransactionModel.findByIdAndUpdate(transaction._id, transaction, {
    new: true,
    useFindAndModify: false,
  });
};

//DELETE
const deleteTransactionService = async (id) => {
  await TransactionModel.findByIdAndDelete(id);
};

module.exports = {
  saveTransactionService,
  getTransactionService,
  getTransactionByIdService,
  updateTransactionService,
  deleteTransactionService,
};
