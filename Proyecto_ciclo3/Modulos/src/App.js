import React, {Fragment} from "react";
import NavbarComponent from "./shared/components/navbar/navbarComponent";
import VentasPage from "./ventas/Ventas";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./ventas/ventasStyles.css"
import RegistrarVentas from "./RegistrarVentas/RegistrarVentas";
import RealizarConsultas from "./RealizarConsultas/RealizarConsultas";

function App() {
  return (
    
    
    <Router>
      <h1>Tienda de ropa deportiva</h1>
      <NavbarComponent />
      <switch>
        <Route path= "/ventas" exact>
          <VentasPage></VentasPage>
        </Route>
        <Route path= "/registrar-ventas" exact>
          <RegistrarVentas></RegistrarVentas>
        </Route>
        <Route path= "/realizar-consultas" exact>
          <RealizarConsultas></RealizarConsultas>
        </Route>
      </switch>
    </Router>
  );
}

export default App;
