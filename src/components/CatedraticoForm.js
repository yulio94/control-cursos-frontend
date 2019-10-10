import React from "react";

class CatedraticoForm extends React.Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="nombre"
              value={this.props.formValues.nombre}
            />
          </div>

          <div className="form-group">
            <label>Apellido</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="apellido"
              value={this.props.formValues.apellido}
            />
          </div>

          <div className="form-group">
            <label>Profesi&oacute;n</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="profesion"
              value={this.props.formValues.profesion}
            />
          </div>

          <div className="form-group">
            <label>Correo</label>
            <input
              onChange={this.props.onChange}
              type="email"
              className="form-control"
              name="correo"
              value={this.props.formValues.correo}
            />
          </div>

          <div className="form-group">
            <label>DPI</label>
            <input
              onChange={this.props.onChange}
              type="number"
              className="form-control"
              name="dpi"
              value={this.props.formValues.dpi}
            />
          </div>
          <button className="btn btn-primary">Guardar</button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </>
    );
  }
}

export default CatedraticoForm;
