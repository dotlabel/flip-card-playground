
import React from 'react'

import GUI from 'core/dat'
import animParamStore from 'stores/animationParams'
import dispatcher from './dispatchers/appDispatcher'
import MyComponent from 'myComponent'

// Create gui
let gui = new GUI( animParamStore.params )
gui.register( event => {
    // naughty
    animParamStore.emit( 'change' )
})

class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container">
                <h1>Hello React</h1>
                <MyComponent />
            </div>
        )
    }
}


function render() {
    console.log( 'rendering' )
    React.render( <App animParams={ animParamStore.params } />, document.querySelector( '.js-main' ) )
}

render()

animParamStore.on( 'change', render )
