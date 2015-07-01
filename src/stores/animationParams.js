
import EventEmitter from 'eventemitter3'


class AnimParamStore extends EventEmitter {
    constructor( props ) {
        super( props )

        this.params = {
            speed: .3
        }
    }

}

export default new AnimParamStore()
