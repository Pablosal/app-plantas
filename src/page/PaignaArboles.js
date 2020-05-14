import React from "react";
import data from "../dataDummy";
import { Link } from "react-router-dom";
const PaignaArboles = () => {
  return (
    <div className="container d-flex" style={{ height: "100vh" }}>
      {data.arboles.map((d) => (
        <div
          className="bg-white m-3 text-dark p-2 "
          key={d.nombre}
          style={{
            maxWidth: "350px",
            width: "200px",
            height: "200px",
            boxShadow: "-3px 0px 10px -4px rgba(0,0,0,0.75)",
          }}
        >
          <Link
            to={`/${d.nombre}`}
            className="justify-content-center align-items-center d-flex flex-column"
          >
            <img height="120px" width="120px" src={d.imageDescription} alt="" />
            <h5>{d.nombre}</h5>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PaignaArboles;
