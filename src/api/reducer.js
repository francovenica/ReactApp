let initState = {
    nombre : "Horacio",
    contador_redux : 0
} //este initState es en el caso de que se use la aplicacion por 1ra vez, o sea no existe un estado "anterior".

let reducer = (estadoAnterior = initState, action) =>{
    switch(action.type){
        case "CONTADOR_AUMENTAR":
            return  {...estadoAnterior, 
                contador_redux : estadoAnterior.contador_redux + 1};
        case "CONTADOR_RESTAR": 
            return  {...estadoAnterior, 
                contador_redux : estadoAnterior.contador_redux - 1};
        case "CONTADOR_RESETEAR":
            return  {...estadoAnterior, 
                contador_redux : 0};
        default:
            return estadoAnterior;
    }
}

export default reducer