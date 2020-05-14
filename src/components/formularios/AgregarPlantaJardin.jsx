import React, { useState } from "react";
import DUMMY from '../../dataDummy.json'
const AgregarPlantaJardin = () => {
  const [nuevaPlanta, setNuevaPlanta] = useState({
    planta: "",
    fecha: "",
    regado: false,
    abono: false,
  });
  let [plantas, setPlantas] = useState([])
  const handleChange = (e) => {
    setNuevaPlanta({ ...nuevaPlanta, [e.target.name]: e.target.value });
    buscarPlante(nuevaPlanta.planta)
  };
  const buscarPlante = (texto) =>{
    if(nuevaPlanta.planta.length===0) return
    let match = DUMMY.arboles.filter(p=>{
      const regex = new RegExp(`^${texto}`,'gi')
      return console.log(p.nombre.match(regex))
      
    })

    if(match.length > 0){
      return <ul> <li>nombre</li></ul>
    }
  }
  return (
    <form
      action=""
      className="bg-white p-5 text-dark "
      style={{ width: "500px" }}
    >
      <h5>Agregar una nueva planta a mi jardin</h5>
      <div className="form-group">
        <label htmlFor="planta">Planta</label>
        <input
          className="form-control"
          type="search"
          name="planta"
          id="planta"
          onChange={handleChange}
          value={nuevaPlanta.planta}
        />
      </div>
      <div className="form-group">
        <label htmlFor="fecha">Fecha Plantado</label>
        <input
          className="form-control"
          type="date"
          name="fecha"
          id="fecha"
          onChange={handleChange}
          value={nuevaPlanta.fecha}
        />
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          name="regado"
          id="regado"
          onChange={handleChange}
          checked={nuevaPlanta.regado}
        />
        <label class="form-check-label" htmlFor="regado">
          Recordar Regado
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          name="abono"
          id="abono"
          onChange={handleChange}
          checked={nuevaPlanta.abono}
        />
        <label class="form-check-label" htmlFor="abono">
          Recordar Abono
        </label>
      </div>
      <input
        type="submit"
        className="btn btn-block btn-success m-2"
        value="Añadir"
      />
    </form>
  );
};

export default AgregarPlantaJardin;
