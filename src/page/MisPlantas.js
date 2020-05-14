import React, { useState } from "react";
import ListaMovibleDePlantas from "../components/jardindeplantas/ListaMovibleDePlantas";
import TableForm from "../components/modal/TableForm";
import Backdrop from "../components/modal/Backdrop";
const MisPlantas = () => {
  const [show, setShow] = useState(false);
  function displayModal() {
    setShow(!show);
  }
  return (
    <div style={{ height: "100vh" }}>
      <button className="btn btn-success btn-block" onClick={displayModal}>
        Agregar Plata
      </button>
      <ListaMovibleDePlantas />
      {show && <Backdrop displayModal={displayModal}></Backdrop>}
      {show && <TableForm />}
    </div>
  );
};

export default MisPlantas;
