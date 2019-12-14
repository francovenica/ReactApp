let initState = {
    nombre : "",
    apellido: "",
    contador : 0,
    usuarios :
        [
            {'nombre' : 'Leandro', 'apellido': 'Patriarca'},
            {'nombre' : 'Javier', 'apellido': 'Konzen'},
            {'nombre' : 'Daniel', 'apellido': 'Gomez'},
            {'nombre' : 'Roberto', 'apellido': 'Perez'}
        ]
} //este initState es en el caso de que se use la aplicacion por 1ra vez, o sea no existe un estado "anterior".

let reducer = (estadoAnterior = initState, action) =>{
    switch(action.type){
        case "CONTADOR_AUMENTAR":
            return  {...estadoAnterior, contador : estadoAnterior.contador + 1};
        case "CONTADOR_RESTAR": 
            return  {...estadoAnterior, contador : estadoAnterior.contador - 1};
        case "CONTADOR_RESETEAR":
            return  {...estadoAnterior, contador : 0};
        case "USUARIO_AGREGAR":
            return {...estadoAnterior,
                usuarios : [
                    //...this.state.usuarios, //como regla general en redux se cambia el "this.state" por estadoAnterior
                    ...estadoAnterior.usuarios,
                    {
                        nombre: estadoAnterior.nombre,
                        apellido: estadoAnterior.apellido
                    }
                ],
                nombre: "",
                apellido: ""
            };
        case "USUARIO_EDITAR":
            return {...estadoAnterior, 
                [action.target.id] : action.target.value
            };
        case "USUARIO_BORRAR":
            let copia = estadoAnterior.usuarios.slice(0) 
            copia.splice(action.indice,1);
            return {...estadoAnterior, usuarios: copia};
        default:
            return estadoAnterior;
    }
}

export default reducer