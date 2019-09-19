import React from "react";

import Navbar from "./Navbar";
import "./styles/Layout.css";

function Layout(props) {
  return (
    <>
      <Navbar />
      <div className="container">{props.children}</div>
    </>
  );
}

export default Layout;
