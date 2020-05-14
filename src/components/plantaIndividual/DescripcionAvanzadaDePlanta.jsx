import React from "react";
const DescripcionAvanzada = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="descripcion_avanzada">
        <h6>Tiempo de plantacion: </h6>
        <h6>Inicio de plantado: </h6>
        <h6>Transplantado</h6>
      </div>
      <div className="descripcion_corta">
        <div className="regado">
          <i className="fas fa-hand-holding-water "></i>
          <h6>Cada 7 dias</h6>
        </div>
        <div className="abono">
          <i className="fas fa-seedling "></i>
          <h6>Cada 21 dias</h6>
        </div>
      </div>
    </div>
  );
};

export default DescripcionAvanzada;
