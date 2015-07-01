
import React from 'react'
import classnames from 'classnames'

class Card extends React.Component {
    state = {
        flipping: false,
        flipped: false
    }

    constructor( props ) {
        super( props )
    }

    componentDidMount() {
        this.el = this.refs.card.getDOMNode()
    }

    onClick = () => {
        console.log( this.el )

        this.setState({
            flipping: true
        })

        this.el.addEventListener( 'webkitTransitionEnd', this.onTransitionEnd )
    }

    onTransitionEnd = () => {
        console.log( 'onTransitionEnd' )
        this.setState({
            flipped: true,
            flipping: false
        })

        this.el.removeEventListener( 'webkitTransitionEnd', this.onTransitionEnd )
    }

    render() {
        let state = this.state
        let props = this.props

        let classes = classnames({
            'FlipCard-card': true,
            'FlipCard-card--isFlipping': state.flipping,
            'FlipCard-card--isFlipped': state.flipped
        })

        let style = {
            transition: 'all ' + this.props.animParams.speed + 's linear'
        }

        return (
            <div ref="card" style={ style } className={ classes } onClick={ this.onClick }>
                { this.props.children }
            </div>
        )
    }
}



export default class FlipCard extends React.Component {
    constructor( props ) {
        super( props )
    }

    render() {
        console.log( 'flipcard::', this.props.animParams )

        let children = this.props.children.map( ( child, i ) => {
            return <Card key={ 'img' + i } animParams={ this.props.animParams }>{ child }</Card>
        })

        return (
            <div className="FlipCard">
                { children }
            </div>
        )
    }
}
