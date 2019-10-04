import React from "react";

function ListarCarreras(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cursos totales</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {props.data ? (
          <tr>
            <td>{props.data}</td>
            <td>{props.data}</td>
            <td>{props.data}</td>
          </tr>
        ) : (
          <tr>
            <td>Noy hay carreras registrados</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
export default ListarCarreras;
