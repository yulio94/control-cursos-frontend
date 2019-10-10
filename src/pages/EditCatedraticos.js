import React from "react";
import CatedraticoForm from "../components/CatedraticoForm";
import api from "../api";
import PageLoading from "./PageLoading";

class EditCatedraticos extends React.Component {
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

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });
    console.log(e);
    try {
      const data = await api.catedraticos.read(
        this.props.match.params.catedraticoId
      );
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
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
      await api.catedraticos.update(
        this.props.match.params.catedraticoId,
        this.state.form
      );
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

export default EditCatedraticos;
