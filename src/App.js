import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ListaMovibleDePlantas from "./components/jardindeplantas/ListaMovibleDePlantas";
import AgregarPlantaJardin from "./components/formularios/AgregarPlantaJardin";
import PlantaIndividual from "./page/PlantaIndividual";
import PaignaArboles from "./page/PaignaArboles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Backdrop from "./components/modal/Backdrop";
import TableForm from "./components/modal/TableForm";
import MisPlantas from "./page/MisPlantas";
import Sidebar from "./components/sidebar/Sidebar";
function App() {
  return (
    <Router>
      <Sidebar></Sidebar>
      <Switch>
        <Route exact path="arboles/:id">
          <PlantaIndividual />
        </Route>

        <Route exact path="/arboles">
          <PaignaArboles />
        </Route>
        <Route path="/">
          <MisPlantas />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
