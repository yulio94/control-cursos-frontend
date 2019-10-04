import React from "react";

function ListarCursos(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Creditos</th>
          <th>Horario</th>
          <th>Carrera</th>
          <th>Catedratico</th>
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
            <td>{props.data}</td>
          </tr>
        ) : (
          <tr>
            <td>Noy hay cursos registrados</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
export default ListarCursos;
