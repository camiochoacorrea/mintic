import React from "react";
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
function NavbarComponent(props) {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const {user, isAuthenticated} = useAuth0();

    let title = props.title;
    return (
        <nav className="navbar navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand"href="">{title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">{isAuthenticated ? user.name : "User"}</button>
          </form>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">MisionTic Factory</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
                </li>
                <li className="nav-item">
                  <Link to = "/register" className="nav-link" href="">Vendedores</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link to="/login" className="nav-link dropdown-toggle"  id="offcanvasNavbarDropdown" 
                  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Login 
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                    {/* <li><Link to="/login" className="dropdown-item" href="">Iniciar Sesión</Link></li> */}
                    {isAuthenticated ? null : <a className="nav-link" onClick={() => loginWithRedirect()}>Login</a>}
                    <li><Link to="/register" className="dropdown-item" >Crear una cuenta</Link></li>
                    {isAuthenticated ? <a className="nav-link" onClick={() => logout({ returnTo: window.location.origin })} >Log Out</a> : null}
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="">Olvidé mi contraseña</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button> */}
                <div className="container">
                <li className="nav-item">
                  <Link to="/add-product" className="nav-link active" aria-current="page" >Productos</Link>
                </li>
                <li className="nav-item">
                  <Link to="/control-usuarios" className="nav-link active" aria-current="page" >Usuarios</Link>
                </li>
                <li className="nav-item">
                  <Link to="/registrarVentas" className="nav-link active" aria-current="page" >Registro de ventas</Link>
                </li>
                </div> 
              </form>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default NavbarComponent;