import React from 'react'

/*
esta es la forma de destructurar props dentro del componente
let Header = (props) => {
    let {} = props
    return (
        <header>
            <h1>React</h1>
            <nav>
                <a href="#">link</a>
                <a href="#"> link2</a>
                <a href="#"> link3</a>
                <p>Hola que tal </p>
            </nav>
        </header>
    )
}
*/
//destructurando props ya en la pasada de parametros:
let Header = ({links}) => 
    //En una funcion flecha que solo tiene un return no necesita {} ni la palabra "return"  
    <header>
        <h1>React</h1>
        <nav>
            {links.map((link) =>
                <>
                <a href={`/${link}`}>{link}</a> {/*Ver "comilla para atras" en info.txt"*/}
                <br/>
                </>
            )}
        </nav>
    </header>

export default Header