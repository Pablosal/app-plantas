import React from "react";
import { Link } from "react-router-dom";
const PaignaArboles = ({ categorias, arbolito }) => {
  return (
    <div className="container d-flex flex-column" style={{ height: "100vh" }}>
      {categorias.map((c) => {
        return (
          <div key={c}>
            <h5>{c}</h5>
            <div className="d-flex justify-content-center flex-row align-items-center">
              {arbolito
                .filter((a) => a.categoria === c)
                .map((d) => (
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
                      style={{ height: "100%", color: "black" }}
                      to={`/arboles/${d.nombre}`}
                      className="justify-content-between align-items-center d-flex flex-column"
                    >
                      <img
                        height="120px"
                        width="120px"
                        src={d.imageDescription}
                        alt=""
                      />
                      <h5>{d.nombre}</h5>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PaignaArboles;
