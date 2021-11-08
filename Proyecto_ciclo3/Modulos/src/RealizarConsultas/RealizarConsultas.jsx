import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./realizarconsultas.css";
import apiBaseUrl from '../shared/utils/Api';


function RealizarConsultas() {
    const [idcliente, setIdCliente]= useState(0);
    const [nombrecliente, setNombreCliente]= useState("");
    const [idproducto, setIdProducto]= useState(0);
    const[precioUnitario, setPrecioUnitario]= useState(0);
    const[cantidad, setCantidad]= useState(0);
    const[calcular, setCalcular]= useState(0);
    const[encargado, setEncargado]= useState("");
    const[estadoventa, setEstadoVenta]= useState ("");
    const multiplicar =() =>{
        setCalcular (precioUnitario * cantidad);
    }
    
    const consulta = async () => {
        const productData = {
            idcliente: idcliente,
            nombrecliente: nombrecliente,
            idproducto: idproducto,
            precioUnitario: precioUnitario,
            cantidad: cantidad,
            total: calcular,
            encargado: encargado,
            estadoventa: estadoventa,
            

        }
        const response = await fetch(`${apiBaseUrl}/realizar-consultas`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);

    }

    const actualizar = async () => {
        const productData = {
            idcliente: idcliente,
            nombrecliente: nombrecliente,
            idproducto: idproducto,
            precioUnitario: precioUnitario,
            cantidad: cantidad,
            total: calcular,
            encargado: encargado,
            estadoventa: estadoventa,

        }
        const response = await fetch(`${apiBaseUrl}/realizar-consultas`, {
            method: 'PUT',
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
            <h1 className="ventas-title"> Consulta de ventas </h1>
            <form className="row g-3">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label color-letra">Número de identificación</label>
                    <input type="number" class="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label color-letra">Nombre completo del cliente</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="" onChange={(nombrecliente)=> setNombreCliente(nombrecliente.target.value)} />
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label color-letra">Identificador de producto</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="" onChange={(idproducto)=> setIdProducto(idproducto.target.value)} />
                </div>
                <div className="col-6">
                    <label for="inputAddress2" className="form-label color-letra">Cantidad</label>
                    <input type="number" className="form-control" id="inputAddress2" placeholder="" onChange={(cantidad)=> setCantidad(cantidad.target.value)} />
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label color-letra">Precio unitario</label>
                    <input type="number" className="form-control" id="inputCity" onChange={(precioUnitario)=> setPrecioUnitario(precioUnitario.target.value)} />
                </div>
                <div className="col-md-12">
                    <label for="inputCity" className="form-label color-letra">Valor total de la venta</label>
                    <input type="number" className="form-control" id="inputCity" onChange={(calcular)=> setCalcular(calcular.target.value)}/>
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label color-letra">Estado de la venta</label>
                    <select id="" className="form-select">
                        <option selected>Elige una opción</option>
                        <option>Cancelada</option>
                        <option>En proceso</option>
                        <option>Entregada</option>
                    </select>
                </div>


                
                <table className="table color-letra">
                    <thead>
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Identificador de producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio unitario</th>
                            <th scope="col">Total</th>
                            <th scope="col">Encargado de la venta</th>
                            <th scope="col">Estado de la venta</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">12/04/2020</th>
                            <td>{(idproducto)=> setIdProducto(idproducto.target.value)}</td>
                            <td>{(cantidad)=> setCantidad(cantidad.target.value)}</td>
                            <td>{(precioUnitario)=> setPrecioUnitario(precioUnitario.target.value)}</td>
                            <td>{(calcular)=> setCalcular(calcular.target.value)}</td>
                            <td>{(encargado)=> setEncargado(encargado.target.value)}</td>
                            <td>{(estadoventa)=> setEstadoVenta(estadoventa.target.value)}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2"></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div className="col-2">
                    <button type="submit" onClick={consulta} className="btn color-btn">Consultar</button>
                </div>
                <div className="col-2">
                    <button type="submit" className="btn color-btn">Actualizar</button>
                </div>
            </form>

        </Fragment>

    );
}

export default RealizarConsultas;