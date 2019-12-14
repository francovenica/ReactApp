export let aumentarContador = () => ({type: "CONTADOR_AUMENTAR"})

export let restarContador = () => ({type: "CONTADOR_RESTAR"})

export let resetearContador = () => ({type: "CONTADOR_RESETEAR"})

export let manejarSubmit = (e) => {
    e.preventDefault();
    return {type: "USUARIO_AGREGAR"}
}

export let cambiarCampo = ({target}) => ({type: "USUARIO_EDITAR", target})

export let borrarUsuario = (indice) => ({type: "USUARIO_BORRAR", indice:indice})
