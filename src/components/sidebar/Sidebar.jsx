import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <nav
      className="navbar container navbar-expand-lg "
      style={{ backgroundColor: "#43DE93" }}
    >
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink
              className="nav-link"
              to="/"
              style={{ fontFamily: " Arvo", color: "black", fontSize: "1.3em" }}
            >
              Mi Jardin
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/arboles"
              style={{ fontFamily: " Arvo", color: "black", fontSize: "1.3em" }}
            >
              Arboles
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
