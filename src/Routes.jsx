import React from "react";
import { Route, BrowserRouter, Form } from "react-router-dom";

import Body from "./Body";
import Header from "./Header";
import SyledBtn from "./Body";
import Usuario from "./Usuario";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Header} path="/Nova" />
      <Route component={SyledBtn} path="/NewCliente" />
      <Route component={Usuario} path="/usuario" />
    </BrowserRouter>
  );
};

export default Routes;
