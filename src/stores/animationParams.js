
import EventEmitter from 'eventemitter3'


class AnimParamStore extends EventEmitter {
    constructor( props ) {
        super( props )

        this.params = {
            test: 5
        }
    }

}

export default new AnimParamStore()
