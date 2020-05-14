import React, { useState } from "react";
const AsociacionSingular = () => {
  const [nice, setNice] = useState([]);
  const [bad, setBad] = useState([]);
  return (
    <div>
      <h6>Asociacion Buena</h6>
      <div className="container border border-success d-flex justify-content-center align-items-center">
        {nice.map((n) => {
          return <img src="" alt="" />;
        })}
      </div>
      <div className="container border border-danger">
        <h6>Asociacion Mala</h6>
        {bad.map((b) => {
          return <img src="" alt="" />;
        })}
      </div>
    </div>
  );
};

export default AsociacionSingular;
