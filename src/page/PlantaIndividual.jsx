import React from "react";
import DescripcionAvanzada from "../components/plantaIndividual/DescripcionAvanzadaDePlanta";
import RecomendacionesPersonales from "../components/plantaIndividual/RecomendacionesPersonales";
import AsociacionSingular from "../components/plantaIndividual/AsociacionSingular";
import { useParams } from "react-router-dom";
import DescripcionImagen from "../components/plantaIndividual/DescripcionImagen";
import DescripcionPlanta from "../components/plantaIndividual/DescripcionPlanta";
const PlantaIndividual = ({ arbolito }) => {
  const parametros = useParams();
  const esteArbol = arbolito.find(
    (c) => c.nombre.toLowerCase() === parametros.id
  );

  return (
    <div
      className="container border border-success d-flex flex-column"
      style={{ height: "100%" }}
    >
      <br />
      <h1>{esteArbol.nombre}</h1>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <DescripcionPlanta arbolito={esteArbol} />
          <DescripcionAvanzada arbolito={esteArbol} />
        </div>
        <DescripcionImagen arbolito={esteArbol} />
      </div>
      {/* <AsociacionSingular />
      <RecomendacionesPersonales /> */}
    </div>
  );
};

export default PlantaIndividual;
