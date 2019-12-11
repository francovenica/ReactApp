import React from 'react'

const Usuarios = ({usuarios, borrarUsuario}) => {
    return (
        <span>
            <h2>Usuarios: </h2>
            <ul style={{listStyle: "none"}}>
                {usuarios.map((usuario, indice) => 
                    <li key={indice}>
                        {usuario.nombre} {usuario.apellido}
                        <button onClick={borrarUsuario.bind(null,indice)} className="material-icons">clear</button>
                        <button className="material-icons">create</button>
                    </li>
                    )}
            </ul>
        </span>
    )
}
//el borrarUsuario.bind(null,) se hace para pasarle parametros a la funcion BorrarUsuarios. El 1er param es null para no cambiar el "this"
//con el que viene la funcion
export default Usuarios
