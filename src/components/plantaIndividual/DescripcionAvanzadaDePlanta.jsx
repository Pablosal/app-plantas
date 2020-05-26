import React from "react";
const DescripcionAvanzada = ({ arbolito }) => {
  return (
    <div className="d-flex  align-items-center">
      <div className="descripcion_corta">
        {" "}
        <div className="descripcion_avanzada m-3 d-flex align-items-center justify-content-center">
          <h6>Transplantado: </h6>
          <h6>{arbolito.transplantado}</h6>
        </div>
        <div className="regado m-3 d-flex align-items-center justify-content-center">
          <i className="fas fa-hand-holding-water fa-2x "></i>
          <h6>
            <strong>Regado: </strong>
          </h6>
          <h6>{arbolito.regado}</h6>
        </div>
        <div className="abono m-3 d-flex align-items-center justify-content-center">
          <i className="fas fa-seedling fa-2x"></i>
          <h6>
            <strong>Abono: </strong>
          </h6>
          <h6>{arbolito.abono}</h6>
        </div>
      </div>
    </div>
  );
};

export default DescripcionAvanzada;
