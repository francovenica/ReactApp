import React from "react"
import ReactDOM from "react-dom"
import App from "./ui/layout/App"
import {Provider} from "react-redux"
import store from "./api/store"

ReactDOM.render( 
    <Provider store={store}>
        <App/>
    </Provider>,
    document.body.children[1]
)


/*
import React from "react"
import ReactDOM from "react-dom"
import App from "./ui/layout/App"
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import store from "./api/store"

ReactDOM.hydrate( 
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.body.children[1]
)
*/