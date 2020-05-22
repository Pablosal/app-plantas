import React from "react";
import DescripcionAvanzada from "../components/plantaIndividual/DescripcionAvanzadaDePlanta";
import RecomendacionesPersonales from "../components/plantaIndividual/RecomendacionesPersonales";
import AsociacionSingular from "../components/plantaIndividual/AsociacionSingular";
import { useParams } from "react-router-dom";
import DescripcionImagen from "../components/plantaIndividual/DescripcionImagen";
import DescripcionPlanta from "../components/plantaIndividual/DescripcionPlanta";
import data from "../dataDummy";
const PlantaIndividual = ({ arbolito }) => {
  const parametros = useParams();
  const esteArbol = arbolito.find(
    (c) => c.nombre.toLowerCase() === parametros.id
  );

  return (
    <div className="container border border-success rounded-top d-flex flex-column">
      <DescripcionPlanta arbolito={esteArbol} />
      <DescripcionImagen arbolito={esteArbol} />
      <DescripcionAvanzada arbolito={esteArbol} />
      {/* <AsociacionSingular />
      <RecomendacionesPersonales /> */}
    </div>
  );
};

export default PlantaIndividual;
