
import EventEmitter from 'eventemitter3'


class AnimParamStore extends EventEmitter {
    constructor( props ) {
        super( props )

        this.params = {
            size: 256,
            speed: .3,
            origin: 0,
            perspective: 1700
        }
    }

}

export default new AnimParamStore()
