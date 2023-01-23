import React from "react";
import { Switch, Route } from "react-router-dom";
import Cadastro from "../pages/cadastro/index.js";
import ControleFinanceiro from "../pages/controleFinanceiro/index.js";

export default function Routes() {
  return (
    <Switch>
      <Route path="/cadastro/:period/:id" component={Cadastro} />
      <Route path="/cadastro/:period/" component={Cadastro} />
      <Route path="/:period" component={ControleFinanceiro} />
      <Route path="/" component={ControleFinanceiro} />
    </Switch>
  );
}
