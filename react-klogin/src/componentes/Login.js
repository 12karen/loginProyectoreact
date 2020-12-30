import React from 'react'
import { getUsuarioSearch } from '../servicios/services';

const Login = () => {

  const validar = ((e)=>{
    e.preventDefault();
  
    let porElementos=document.forms["formulario"].elements[0].value;
    let usuario;
    getUsuarioSearch(porElementos).then ((dato)=> {
      usuario = dato; 
    });
   
    console.log (usuario);
    

  })
    return (
      <div className="container contenedor">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <form className="formLogin" id="formulario" onSubmit={validar}>
                <div className="form-group">
                    <label for="usuario">Usuario:</label>
                    <input type="text" className="form-control" id="usuario" placeholder="Ingrese Usuario.."/> 
                </div>
                <div className="form-group">
                      <label for="clave">Clave:</label>
                      <input type="password" className="form-control" id="clave" placeholder="Ingrese clave.."/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
            </form> 
          </div>
        </div>
      </div>
    )
}

export default Login
