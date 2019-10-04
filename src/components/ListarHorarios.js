import React from "react";

function ListarHorarios(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Hora inicial</th>
          <th>Hora final</th>
        </tr>
      </thead>
      <tbody>
        {props.data ? (
          <tr>
            <td>{props.data}</td>
            <td>{props.data}</td>
          </tr>
        ) : (
          <tr>
            <td>Noy hay horarios registrados</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
export default ListarHorarios;
