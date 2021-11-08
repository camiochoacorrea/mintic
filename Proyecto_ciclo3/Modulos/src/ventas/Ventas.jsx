import React, {Fragment} from "react";
import "./ventasStyles.css";
import {Link} from "react-router-dom";



function VentasPage(){


    return(
        <Fragment>
            <h1 className="ventas-title"> Ventas </h1>
            <Link to="./registrar-ventas"><button type="button" className="btn color-btn btn-lg">Registrar venta</button>
            </Link>

            <Link to="./realizar-consultas"> <button type="button" class="btn color-btn btn-lg">Realizar consultas</button>
            </Link>


        </Fragment>
    );
    
}

export default VentasPage;