import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exct path="/catedraticos" component={ListCatedraticos} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
