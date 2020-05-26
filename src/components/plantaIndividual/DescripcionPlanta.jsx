import React from "react";
const DescripcionPlanta = ({ arbolito }) => {
  return (
    <div className="container d-flex justify-start  align-center">
      <div className="icon_description">
        <div className="mini-description d-flex flex-column align-center justify-center">
          <h5>Nombre Cientifico</h5>
          <strong>{arbolito.nombreCientifico}</strong>
          <h6>Categoria</h6>
          <strong>{arbolito.categoria}</strong>
        </div>
        <p className="">{arbolito.descripcion}</p>
      </div>
      <div className="big_description"></div>
    </div>
  );
};

export default DescripcionPlanta;
