import React from "react";

class ListCatedraticos extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      profesion: "",
      correo: "",
      dpi: ""
    }
  };

  render() {
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
          <tr></tr>
        </tbody>
      </table>
    );
  }
}

export default ListCatedraticos;
