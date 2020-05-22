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
import { useSelector } from "react-redux";

function App() {
  const arboles = useSelector((state) => state);
  return (
    <Router>
      <Sidebar></Sidebar>
      <Switch>
        <Route exact path="/arboles/:id">
          <PlantaIndividual arbolito={arboles.jardin} />
        </Route>
        <Route exact path="/arboles">
          <PaignaArboles
            arbolito={arboles.jardin}
            categorias={arboles.categorias}
          />
        </Route>
        <Route path="/">
          <MisPlantas plantas={arboles} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
