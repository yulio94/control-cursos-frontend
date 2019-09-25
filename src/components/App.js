import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/App.css";

import Layout from "./Layout";
import Home from "./Home";
import Login from "./Login";
import PageCatedraticos from "../pages/PageCatedraticos";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exct path="/catedraticos" component={PageCatedraticos} />
          <Route exct path="/cursos" />
          <Route exct path="/carreras" />
          <Route exct path="/horarios" />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
