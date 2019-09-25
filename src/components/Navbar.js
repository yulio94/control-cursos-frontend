import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg personal-navbar">
      <NavLink to="/" className="navbar-brand">
        Inicio
      </NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink to="/catedraticos" className="nav-link">
              Catedr&aacute;ticos
            </NavLink>
          </li>

          <li className="nav-item active">
            <NavLink to="/cursos" className="nav-link">
              Cursos
            </NavLink>
          </li>

          <li className="nav-item active">
            <NavLink to="/carreras" className="nav-link">
              Carreras
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/horarios" className="nav-link">
              Horarios
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
