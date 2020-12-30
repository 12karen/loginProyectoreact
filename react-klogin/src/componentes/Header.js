import React from 'react'

const Header = () => {
    return (
       
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container-fluid">
          
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="!#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Maestros
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
		                      <li><a className="dropdown-item" href="!#">Productos</a></li>
                		      <li><a className="dropdown-item" href="!#">Categoria </a></li>
                		      <li><a className="dropdown-item" href="!#">Almacen</a></li>
			        	   </div>    
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="!#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Movimiento de Inventario
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="!#">Ingreso de Mercaderia</a></li>
                      <li><a className="dropdown-item" href="!#">Salida de Mercaderia</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="!#">Transferencia entre almacenes</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="!#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Reportes
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="!#">Compras</a>
                      <a className="dropdown-item" href="!#">Ventas</a>
                      <hr className="dropdown-divider"/>
                      <a className="dropdown-item" href="!#">Stock</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          
    )
}

export default Header
