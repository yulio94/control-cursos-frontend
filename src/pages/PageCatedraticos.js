import React from "react";
import ListCatedraticos from "../components/ListCatedraticos";
import api from "../api";
import PageLoading from "../pages/PageLoading";
import PageError from "../pages/PageError";
import { Link } from "react-router-dom";

class PageCatedraticos extends React.Component {
  state = {
    loading: false,
    error: null,
    data: undefined,
    modalIsOpen: false
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.catedraticos.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };

  handleDeleteCatedratico = async e => {
    this.setState({ loading: false, error: null });
    try {
      await api.catedraticos.remove(this.state.match.params.catedraticoId);
      this.setState({ loading: false });

      this.props.history.push("/catedraticos/");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <>
        <br />
        <h1>Gesti&oacute;n catedr&aacute;ticos</h1>
        <br />
        <Link to="/catedraticos/nuevo/" className="btn btn-primary active">
          Agregar
        </Link>
        <div className="divider"></div>
        <br />
        <ListCatedraticos
          onCloseModal={this.handleCloseModal}
          onOpenModal={this.handleOpenModal}
          modalIsOpen={this.state.modalIsOpen}
          onDeleteCatedratico={this.handleDeleteCatedratico}
          data={this.state.data}
        />
      </>
    );
  }
}

export default PageCatedraticos;
