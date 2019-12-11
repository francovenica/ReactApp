import React from 'react'
import Usuarios from './Usuarios'

const Formulario = ({cambiarCampo, nombre, apellido, manejarSubmit, usuarios, borrarUsuario}) => {
    return (
        <div>
            <form onSubmit={manejarSubmit}> 
                <input value={nombre} id="nombre" onChange={cambiarCampo} type="text" placeholder="Nombre"/>
                <input value={apellido} id="apellido" onChange={cambiarCampo} type="text" placeholder="Apellido"/>
                <button>Agregar</button>
            </form>
            <Usuarios usuarios={usuarios} borrarUsuario={borrarUsuario}/>
        </div>
    )
}

export default Formulario
