import React from "react";
import ListarCarreras from "../components/ListarCarreras";
import api from "../api";
import PageLoading from "../pages/PageLoading";
import PageError from "../pages/PageError";

class PageCarreras extends React.Component {
  state = {
    loading: false,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.carreras.list();
      this.setState({ loading: false, data: data });
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
        <h1>Gesti&oacute;n carreras</h1>
        <div className="divider"></div>
        <br />
        <ListarCarreras data={this.state.data} />
      </>
    );
  }
}

export default PageCarreras;
