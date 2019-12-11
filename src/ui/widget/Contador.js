import React from 'react'

const Contador = ({contador, aumentarContador, resetearContador, restarContador}) => {
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

export default Contador
