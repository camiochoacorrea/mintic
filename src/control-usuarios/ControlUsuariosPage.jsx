import React, { useState } from 'react';
import apiBaseUrl from '../shared/utils/Api';

const ControlUsuariosPage = () => {
    const [correo , setCorreo] = useState("");
    const [nombre , setNombre] = useState("");
    const [rol , setRol] = useState("");
    const [estado , setEstado] = useState("");
    const controlUsuarios = async () => {
        const usuarioData = {
            email:correo,
            name: nombre,
            rol :rol,
            estado:estado
        }
         const response = await fetch(`${apiBaseUrl}/control-usuarios`, {
          method: 'POST',
          headers: {
             'Content-Type': 'application/json'
        },
            body:JSON.stringify(usuarioData)
        });
        const jsonResponse = await response.json(); 
        console.log(jsonResponse);
    }  
    return (
        <div className="container">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setCorreo(e.target.value)} />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Rol</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setRol(e.target.value)} />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Estado</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setEstado(e.target.value)} />
                </div>
                <button type="button" onClick={controlUsuarios} className="btn btn-primary">Agregar Usuario</button>
            </form>
            
        </div>
    )
}



export default ControlUsuariosPage

