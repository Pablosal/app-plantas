import React from "react";
import ReactDOM from "react-dom";
import AgregarPlantaJardin from "../formularios/AgregarPlantaJardin";

const TableForm = (props) => {
  return ReactDOM.createPortal(
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "12",
        height: "100vh",
        position: "fixed",
      }}
    >
      <AgregarPlantaJardin
        displayModal={props.displayModal}
        arbolito={props.arbolitos}
      />
    </div>,
    document.getElementById("modal-root")
  );
};

export default TableForm;
