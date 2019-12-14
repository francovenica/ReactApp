import React from 'react'
import Usuarios from './Usuarios'
import {connect} from "react-redux"
import {manejarSubmit, cambiarCampo} from "../../api/actions"
import {bindActionCreators} from "redux"

const Formulario = ({cambiarCampo, nombre, apellido, manejarSubmit}) => {
    return (
        <div>
            <form onSubmit={manejarSubmit}> 
                <input value={nombre} id="nombre" onChange={cambiarCampo} type="text" placeholder="Nombre"/>
                <input value={apellido} id="apellido" onChange={cambiarCampo} type="text" placeholder="Apellido"/>
                <button>Agregar</button>
            </form>
            <Usuarios/>
        </div>
    )
}

/*
let mapStateToProps = store => ({
    nombre : store.nombre,
    apellido : store.apellido
})
*/
//lo comentado arriba se puede traducir en esto:
//desestructuro store en las 2 variables que tiene y el retorno en vez de hacer nombre: nombre, apellido: apellido, 
//como las claves son igual que los parametros podemos simplemente escribir nombre, apellido
let mapStateToProps = ({nombre, apellido}) => ({nombre, apellido})

let mapDispatchToProps = dispatch => ({
    manejarSubmit : bindActionCreators(manejarSubmit,dispatch),
    cambiarCampo : bindActionCreators(cambiarCampo,dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Formulario)
