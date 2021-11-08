import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./registrarVentas.css";
import apiBaseUrl from '../shared/utils/Api';


function RegistrarVentas() {

    const [idcliente, setIdCliente]= useState(0);
    const [nombrecliente, setNombreCliente]= useState("");
    const [idproducto, setIdProducto]= useState(0);
    const[precioUnitario, setPrecioUnitario]= useState(0);
    const[cantidad, setCantidad]= useState(0);
    const[calcular, setCalcular]= useState(0);
    const[encargado, setEncargado]= useState("");
    const multiplicar =() =>{
        setCalcular (precioUnitario * cantidad);
    }
    
    const addProduct = async () => {
        const productData = {
            idcliente: idcliente,
            nombrecliente: nombrecliente,
            idproducto: idproducto,
            precioUnitario: precioUnitario,
            cantidad: cantidad,
            total: calcular,

        }
        const response = await fetch(`${apiBaseUrl}/add-product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
    }
   

    return (
        <Fragment>
               
            <h1 className="ventas-title">Registro de Ventas </h1>
            <form className="row g-3 bajar">
                <div className="mb-3 row ">
                    <label for="staticEmail" className="col-sm-2 col-form-label color-letra">Identificador de venta:</label>
                    <div class="col-sm-2">
                        <input type="text" readonly className="form-control-plaintext color-letra" id="staticEmail" value="1234"/>
                    </div>
                </div>
            </form>
            <form className="row g-3 ">
                <div className="mb-3 row ">
                    <label for="staticEmail" className="col-sm-2 col-form-label color-letra">Fecha:</label>
                    <div class="col-sm-8">
                        <input type="text" readonly className="form-control-plaintext color-letra" id="staticEmail" value="3 de octubre de 2021"/>
                    </div>
                </div>
            </form>
            <form className="row g-3">
                <div className="col-md-4">
                    <label for="inputEmail4" className="form-label color-letra">Número identificación del cliente</label>
                    <input type="text" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-8">
                    <label for="inputPassword4" className="form-label color-letra">Nombre completo del cliente</label>
                    <input type="text" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-4">
                    <label for="inputAddress" className="form-label color-letra">Identificador de producto</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="" />
                </div>
                <div className="col-4">
                    <label for="inputAddress" className="form-label color-letra">Cantidad</label>
                    <input type="number" className="form-control" id="inputAddress" placeholder="" onChange={(cantidad)=> setCantidad(cantidad.target.value)}/>
                </div>
                <div className="col-4">
                    <label for="inputAddress" className="form-label color-letra">Precio unitario</label>
                    <input type="number" className="form-control" id="inputAddress" placeholder="" onChange={(precioUnitario)=> setPrecioUnitario(precioUnitario.target.value)}/>
                </div>


                <div className="col-4">
                    <label for="Static" className="col-sm-6 col-form-label color-letra">Valor total de la venta</label>
                    <h2>{calcular}</h2>
                </div>
                <div className="col-4">
                    <button type="button" className="btn color-btn" onClick= {multiplicar}>Calcular total de la venta</button>
                </div>
                <div className="col-md-12">
                    <label for="inputCity" className="form-label color-letra">Encargado de la gestión de la venta</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label color-letra">Estado de la venta</label>
                    <select id="inputState" className="form-select">
                        <option selected>Elige una opción</option>
                        <option>Cancelada</option>
                        <option>En proceso</option>
                        <option>Entregada</option>
                    </select>
                </div>
                
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label color-letra" for="gridCheck">
                            Acepto las condiciones
                        </label>
                    </div>
                </div>
                <div className="col-2">
                    <button type="submit" className="btn color-btn">Registrar venta</button>
                </div>
                <div className="col-2">
                    <button type="submit"  onClick={addProduct}  className="btn color-btn">Limpiar</button>
                </div>
            </form>


        </Fragment>

    );
}

export default RegistrarVentas