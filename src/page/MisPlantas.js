import React, { useState } from "react";
import ListaMovibleDePlantas from "../components/jardindeplantas/ListaMovibleDePlantas";
import TableForm from "../components/modal/TableForm";
import Backdrop from "../components/modal/Backdrop";
const MisPlantas = ({ arbolito }) => {
  const [show, setShow] = useState(false);

  function displayModal() {
    setShow(!show);
  }
  return (
    <div
      className="container"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0",
      }}
    >
      <button className="btn btn-success btn-block" onClick={displayModal}>
        Agregar Plata
      </button>
      <ListaMovibleDePlantas />
      {show && <Backdrop displayModal={displayModal}></Backdrop>}
      {show && <TableForm arbolitos={arbolito} displayModal={displayModal} />}
    </div>
  );
};

export default MisPlantas;
