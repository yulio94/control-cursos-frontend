import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/App.css";

import Layout from "./Layout";
import Home from "./Home";
import Login from "./Login";
import PageCatedraticos from "../pages/PageCatedraticos";
import PageCursos from "../pages/PageCursos";
import PageHorarios from "../pages/PageHorarios";
import PageCarreras from "../pages/PageCarreras";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exct path="/catedraticos" component={PageCatedraticos} />
          <Route exct path="/cursos" component={PageCursos} />
          <Route exct path="/carreras" component={PageCarreras} />
          <Route exct path="/horarios" component={PageHorarios} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
