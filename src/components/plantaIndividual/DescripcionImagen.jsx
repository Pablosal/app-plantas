import React from "react";
import placeholder from "../../images/redshieet.jpg";

const DescripcionImagen = ({ arbolito }) => {
  return (
    <div>
      <figure>
        {" "}
        <img
          src={arbolito.imagen}
          height="400px"
          className="float-right"
          alt="icon"
          style={{
            position: "relative",
            textAlign: "center",
            color: "white",
          }}
        />
      </figure>
      <div
        style={{ width: "100%" }}
        className="d-flex justify-content-around bg-success align-items-center "
      >
        <div className="daylight_container">
          {arbolito.luz ? (
            <i className="fas fa-sun fa-2x" style={{ color: "white" }}></i>
          ) : (
            <i className="fas fa-moon fa-2x" style={{ color: "white" }}></i>
          )}
        </div>
        <div className="temperature_container d-flex justify-content-center">
          <i
            className="fas fa-temperature-low fa-2x m-1"
            style={{ color: "white" }}
          ></i>
          <strong style={{ color: "white" }}> {arbolito.temperatura}</strong>
        </div>
      </div>
    </div>
  );
};

export default DescripcionImagen;
