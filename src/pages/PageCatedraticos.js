import React from "react";
import ListCatedraticos from "../components/ListCatedraticos";

class PageCatedraticos extends React.Component {
  render() {
    return (
      <>
        <br />
        <h1>Gesti&oacute;n Catedr&aacute;ticos</h1>
        <div className="divider"></div>
        <br />
        <ListCatedraticos></ListCatedraticos>
      </>
    );
  }
}

export default PageCatedraticos;
