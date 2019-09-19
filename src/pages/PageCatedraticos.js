import React from "react";

function PageCatedraticos(props) {
  return (
    <>
      <h1>Gesti&oacute;n Catedr&aacute;ticos</h1>
      <div className="divider"></div>
      {props.children}
    </>
  );
}

export default PageCatedraticos;
