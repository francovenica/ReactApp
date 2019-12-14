import React from 'react'
import {connect} from "react-redux"
import {aumentarContador,resetearContador,restarContador} from "../../api/actions"
import {bindActionCreators} from "redux"

const Contador = ({aumentarContador, resetearContador, restarContador, contador}) => {
    return (
        <section>
            <h2>Contador</h2>
            <p>Cuenta hasta ahora: {contador}</p>
            <button onClick={aumentarContador}> + </button>
            <button onClick={restarContador}> - </button>
            <button onClick={resetearContador}>Clear</button>
        </section>
    )
}

let mapStateToProps = (store) => {return { contador : store.contador}}

let mapDispatchToProps = (dispatch) => { 
    return {
        aumentarContador : bindActionCreators(aumentarContador,dispatch),
        resetearContador : bindActionCreators(resetearContador,dispatch),
        restarContador : bindActionCreators(restarContador,dispatch)
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Contador)