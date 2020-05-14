import React from "react";
import placeholder from "../../images/redshieet.jpg";

const DescripcionImagen = () => {
  return (
    <div>
      <figure>
        {" "}
        <img
          src={placeholder}
          height="500px"
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
        className="d-flex justify-content-around bg-dark align-items-center "
      >
        <div className="daylight_container">
          <i className="fas fa-sun fa-2x"></i>
          <i className="fas fa-moon fa-2x"></i>
        </div>
        <div className="temperature_container d-flex justify-content-center">
          <i className="fas fa-temperature-low fa-2x m-1"></i>
          <strong>25°</strong>
        </div>
      </div>
    </div>
  );
};

export default DescripcionImagen;
