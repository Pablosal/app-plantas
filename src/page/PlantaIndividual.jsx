import React from "react";
import DescripcionAvanzada from "../components/plantaIndividual/DescripcionAvanzadaDePlanta";
import RecomendacionesPersonales from "../components/plantaIndividual/RecomendacionesPersonales";
import AsociacionSingular from "../components/plantaIndividual/AsociacionSingular";
import DescripcionImagen from "../components/plantaIndividual/DescripcionImagen";
import DescripcionPlanta from "../components/plantaIndividual/DescripcionPlanta";
import data from "../dataDummy";
const PlantaIndividual = () => {
  console.log(data);
  return (
    <div className="container border border-success rounded-top d-flex flex-column">
      <DescripcionPlanta />
      <DescripcionImagen />
      <DescripcionAvanzada />
      {/* <AsociacionSingular /> */}
      {/* <RecomendacionesPersonales /> */}
    </div>
  );
};

export default PlantaIndividual;
