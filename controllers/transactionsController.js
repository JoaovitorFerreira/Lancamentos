const {
  getTransactionService,
  getTransactionByIdService,
  saveTransactionService,
  updateTransactionService,
  deleteTransactionService,
} = require("../services/transactionService");

//GET
const getTransactions = async (req, res) => {
  try {
    const result = await getTransactionService(req.params.period);
    res.status(200).send(result);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || "Erro ao retornar os dados" });
  }
};

//GET ONE
const getTransactionById = async (req, res) => {
  try {
    const result = await getTransactionByIdService(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || "Erro ao retornar os dados" });
  }
};

//POST/SAVE
const postTransaction = async (req, res) => {
  try {
    const transaction = await saveTransactionService(req.body);
    res.status(200).send({ transaction });
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || "Erro ao imputar os dados" });
  }
};

//UPDATE
const updateTransaction = async (req, res) => {
  try {
    await updateTransactionService(req.body);
    res.status(200).send("Atualizado com sucesso!");
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || "Erro ao imputar os dados" });
  }
};

//DELETE
const deleteTransaction = async (req, res) => {
  try {
    await deleteTransactionService(req.body);
    res.status(200).send("deletado com sucesso!");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getTransactionById,
  getTransactions,
  updateTransaction,
  postTransaction,
  deleteTransaction,
};
