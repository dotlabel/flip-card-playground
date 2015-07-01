
import dat from 'dat-gui'

export default class GUI {
    constructor( data ) {
        this.gui = new dat.GUI()

        this.callbacks = []

        // Build gui
        this.gui.add( data, 'speed', 0, 5 )
            .step( .1 )
            .onFinishChange( this.onFinish )
    }

    onFinish = ( event ) => {
        this.callbacks.forEach( cb => cb( event ) )
    }

    register( cb ) {
        this.callbacks.push( cb )
    }

}
