import React from "react";

function ListCatedraticos(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Profesi&oacute;n</th>
          <th>Correo</th>
          <th>DPI</th>
        </tr>
      </thead>
      <tbody>
        {props.data ? (
          <tr>
            <td>{props.data}</td>
            <td>{props.data}</td>
            <td>{props.data}</td>
            <td>{props.data}</td>
            <td>{props.data}</td>
          </tr>
        ) : (
          <tr>
            <td>No hay catedraticos registrados</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ListCatedraticos;
