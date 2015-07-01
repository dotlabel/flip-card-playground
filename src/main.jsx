
import React from 'react'

import GUI from 'core/dat'
import animParamStore from 'stores/animationParams'
import dispatcher from './dispatchers/appDispatcher'

import FlipCard from 'flipCard/flipCard'

// Create gui
let gui = new GUI( animParamStore.params )
gui.register( event => {
    // naughty
    animParamStore.emit( 'change' )
})

class App extends React.Component {
    constructor( props ) {
        super( props )
    }

    render() {
        const IMAGE_SIZE = 512

        // Pass through animation params to flip card
        return (
            <div className="container">
                <h1>Hello React</h1>
                <FlipCard animParams={ this.props.animParams }>
                    <img src="/assets/face1.png" width={ IMAGE_SIZE } height={ IMAGE_SIZE } />
                    <img src="/assets/face2.png" width={ IMAGE_SIZE } height={ IMAGE_SIZE } />
                    <img src="/assets/face3.png" width={ IMAGE_SIZE } height={ IMAGE_SIZE } />
                    <img src="/assets/face4.png" width={ IMAGE_SIZE } height={ IMAGE_SIZE } />
                </FlipCard>
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
