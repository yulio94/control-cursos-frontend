import React from "react";
import CatedraticoForm from "../components/CatedraticoForm";
import api from "../api";
import PageLoading from "./PageLoading";

class NuevoCatedratico extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      nombre: "",
      apellido: "",
      profesion: "",
      correo: "",
      dpi: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.catedraticos.create(this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/catedraticos/");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <>
        <br />
        <CatedraticoForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          formValues={this.state.form}
          error={this.state.error}
        />
      </>
    );
  }
}

export default NuevoCatedratico;
