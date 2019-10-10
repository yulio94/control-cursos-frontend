import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/App.css";

import Layout from "./Layout";
import Home from "./Home";
import Login from "./Login";

// Imports de catedraticos
import PageCatedraticos from "../pages/PageCatedraticos";
import EditCatedraticos from "../pages/EditCatedraticos";
import NuevoCatedratico from "../pages/NuevoCatedratico";

import PageCursos from "../pages/PageCursos";
import PageHorarios from "../pages/PageHorarios";
import PageCarreras from "../pages/PageCarreras";
import ListCatedraticos from "./ListCatedraticos";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/catedraticos/" component={PageCatedraticos} />
          <Route
            exact
            path="/catedraticos/nuevo/"
            component={NuevoCatedratico}
          />
          <Route
            exact
            path="/catedraticos/:catedraticoId/edit/"
            component={EditCatedraticos}
          />
          <Route
            exact
            path="/catedraticos/:catedraticoId/"
            component={ListCatedraticos}
          />
          <Route exct path="/cursos/" component={PageCursos} />
          <Route exct path="/carreras/" component={PageCarreras} />
          <Route exct path="/horarios/" component={PageHorarios} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
