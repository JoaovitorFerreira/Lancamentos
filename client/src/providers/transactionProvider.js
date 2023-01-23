import React, { createContext, useContext, useState } from "react";

const TransactionContext = createContext({});

const TransactionProvider = ({ children }) => {
  const [transaction, setTransaction] = useState({});

  return (
    <TransactionContext.Provider value={{ transaction, setTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("Auth require AuthProvider");
  }
  return context;
};

export { TransactionProvider, useTransaction };
