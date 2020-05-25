import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Autocomplete from "react-autocomplete";
import { añadirPlanta } from "../../redux/actions/AbolesActions";
import { v4 as uuidv4 } from "uuid";
import icon from "../../images/bonado.png";

const AgregarPlantaJardin = ({ arbolito, displayModal }) => {
  const dispatch = useDispatch();
  const [nuevaPlanta, setNuevaPlanta] = useState({
    image: icon,
    id: uuidv4(),
    nombre: "",
    fecha: "",
    regado: false,
    abono: false,
  });

  const handleChange = (e) => {
    setNuevaPlanta({ ...nuevaPlanta, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        dispatch(añadirPlanta(nuevaPlanta));
        displayModal();
      }}
      action=""
      className="bg-white p-5 text-dark "
      style={{ width: "500px" }}
    >
      <h5>Agregar una nueva planta a mi jardin</h5>
      <div className="form-group">
        <label htmlFor="planta">Planta</label>
        <Autocomplete
          getItemValue={(item) => item.nombre}
          items={arbolito}
          renderItem={(item, isHighlighted) => (
            <div
              key={uuidv4()}
              style={{ background: isHighlighted ? "lightgray" : "white" }}
            >
              {item.nombre}
            </div>
          )}
          name="nombre"
          id="nombre"
          className="form-control"
          onChange={(e) =>
            setNuevaPlanta({ ...nuevaPlanta, nombre: e.target.value })
          }
          value={nuevaPlanta.nombre}
          onSelect={(value) =>
            setNuevaPlanta({ ...nuevaPlanta, nombre: value })
          }
        ></Autocomplete>
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
        <label className="form-check-label" htmlFor="regado">
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
        <label className="form-check-label" htmlFor="abono">
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
