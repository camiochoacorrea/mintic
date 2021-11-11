import React, { useState } from 'react'
import apiBaseUrl from '../shared/utils/Api';

const AddProductPage = () => {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [description, setDescription] = useState("");
    const addProduct = async () => {
        const productData = {
            name: productName,
            price: price,
            stock: stock,
            description: description
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
        <div className="container">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Nombre de Producto</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setProductName(e.target.value)} />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Precio</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Cantidad</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setStock(e.target.value)} />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Descripción</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="button" onClick={addProduct} className="btn btn-primary">Agregar producto</button>
            </form>
        </div>
    )
}

export default AddProductPage