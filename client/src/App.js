import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { TransactionProvider } from "./providers/transactionProvider.js";
import GlobalStyle from "./styles/index.js";

export default function App() {
  return (
    <BrowserRouter>
      <TransactionProvider>
        <Routes />
        <GlobalStyle />
      </TransactionProvider>
    </BrowserRouter>
  );
}
