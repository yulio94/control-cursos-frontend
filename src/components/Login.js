import React from "react";

class Login extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="form-group">
          <label>Usuario</label>
          <input
            className="form-control"
            type="text"
            name="usuario"
            value={this.props.formValues.usuario}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={this.props.formValues.email}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={this.props.formValues.password}
          />
        </div>
        <button onClick={this.handleClick} className="btn btn-primary">
          Login
        </button>

        {this.props.error && (
          <p className="text-danger">{this.props.error.message}</p>
        )}
      </form>
    );
  }
}

export default Login;
