import React from "react";
import ReactDOM from "react-dom";
import TableForm from "./TableForm";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={props.displayModal}
      style={{
        backgroundColor: "rgba(0,0,0,0.83)",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        zIndex: "0",
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
      }}
    ></div>,
    document.getElementById("backdrop-root")
  );
};

export default Backdrop;
