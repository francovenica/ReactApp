import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Contador from '../widget/Contador'
import Formulario from '../widget/Formulario'

class App extends Component {

    constructor(){
        super()
        this.state = {
            links : ["usuarios", "tickets", "contactos"],
            usuarios :
            [
                {
                    'nombre' : 'Leandro', 'apellido': 'Patriarca'
                },
                {
                    'nombre' : 'Javier', 'apellido': 'Konzen'
                },
                {
                    'nombre' : 'Daniel', 'apellido': 'Gomez'
                },
                {
                    'nombre' : 'Roberto', 'apellido': 'Perez'
                }
            ]
        }
        //this.resetearContador = this.resetearContador.bind(this)
    }
    /*----------------_______________________-------------------------

    Estos metodos de contador los estamos refactorizando para usar redux. Se van a implementar en actions.js

    aumentarContador = () => {
         //con la funcion flecha el binding es implicito y por eso no hay que hacerlo en el constructor.
        this.setState({ contador : this.state.contador + 1})
    }

    restarContador = () => {
        if (this.state.contador > 0 )
            this.setState({ contador : this.state.contador - 1})
    }

    resetearContador(){
        //Deje esta funcion sin hacerlo con flecha () => {} como ejemplo para hacer el bind en el constructor
        this.setState({ contador : 0})
    }
    ----------------_______________________-------------------------*/

    /*-------------------------REDUX-----------------------------------------
    Estos 3 metodos se los va a pasar por redux, por eso las comento
    borrarUsuario = (indice) => {
        //No se puede modificar un state directamente, se tiene que "recrear" el array de usuarios como lo queremos de manera final
        //O sea copiar el array en una variable nueva, editar ese nuevo array para que quede sin el usuario q queremos borrar y 
        //despues igualar "Usuario" con setState al nuevo array que modificamos

        let copia = [...this.state.usuarios] //con los 3 puntos estoy haciendo una copia del array de usuarios
        //let copia = this.state.usuarios.slice(0) otra forma de copiar, una copia del indice 0 a infinito
        //le hacemos una splice para sacarle el usuario usando su indice
        copia.splice(indice,1);
        this.setState({usuarios : copia});
    }

    cambiarCampo = (e) =>{
        
        let nuevo_estado = {}; //Se usa este metodo (igualando a llaves primero), debido a que el nuevo elemento es desconocido
                                //si fuese una "cadena de text" no seria necesario
        nuevo_estado[e.target.id] = e.target.value;
        console.log(nuevo_estado);
        this.setState(nuevo_estado)
        
        //todo lo anterior es esquivalente a:
        this.setState({[e.target.id] : e.target.value}) //Esta sintaxis es algo nuevo de ES6
    }

    manejarSubmit = (e) => {
        e.preventDefault() //event handler que no permite refrescar la pagina cuando haces submit, es algo de javascript nativo
        
        //se genera un nuevo usuario desde un objeto vacio
        let nuevo_usuario = {} 
        nuevo_usuario.nombre = this.state.nombre;
        nuevo_usuario.apellido = this.state.apellido;
        
        //hago una copia de state.usuarios haciendo un slice
        let copia_usuarios = this.state.usuarios.slice(0);
        
        //pushea la copia
        copia_usuarios.push(nuevo_usuario);
        
        //igualas la copia al usuario.
        //todo esto porque se tiene que usar setState si o si para modificar usuarios
        this.setState({usuarios : copia_usuarios});
        
        //Agarra todos los elementos de un array y separalos individualmente usando los "..." (operador rest)
        //Eso separa elementos de un array en objetos individuales [{},{},{},....,{}]
        this.setState({
            usuarios : [
                ...this.state.usuarios,
                {
                    nombre: this.state.nombre,
                    apellido: this.state.apellido
                }
            ],
            nombre : "",
            apellido : ""
        })
    }
    ----------------------------------------------
        */

    render(){
        let {links} = this.state; //Con esto ya no tengo que escribir this.state.links, sino solo links. Es el concepto de "destructurado"
        return(
            <> {/*Este simbolo es  para abrir la sintaxis de JSX*/}
                <Header links={links}/> {/*las llaves son para escapar JSX. 
                            El nombre "links" del prop puede ser lo que yo sea, que se llame igual que la variable en states es conincidencia*/}
                <Main/>
                <Formulario/>
                <Contador/>
                <Footer/>
            </>
        )
    }
}

export default App