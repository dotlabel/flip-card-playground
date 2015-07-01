
import path from 'path'

import React from 'react/addons'
import classnames from 'classnames'

let CSSTransitionGroup = React.addons.CSSTransitionGroup
let clone = React.addons.cloneWithProps


export default class FlipCard extends React.Component {
    constructor( props ) {
        super( props )
    }

    state = {
        activeCard: 0
    }

    onClick = () => {
        // Wrap 0 to number of children - 1
        this.setState({
            activeCard: ++this.state.activeCard % ( this.props.children.length - 1 )
        })
    }

    getChildTransition() {
        let leaveTransition = 'transform ' + this.props.animParams.speed + 's ease-in'
        return 'opacity .177s ease-in, ' + leaveTransition
    }

    render() {
        let children = this.props.children
            .filter( ( child, i ) => {
                return i === this.state.activeCard
            })
            .map( child => {
                return clone( child, {
                    key: path.basename( child.props.src, '.png' ),
                    className: classnames({
                        'u-fill': true,
                        'FlipCard-cardImage': true
                    }),
                    style: {
                        transformOrigin: this.props.animParams.origin + '%',
                        transition: this.getChildTransition()
                    }
                })
            })

        let style = {
            perspective: this.props.animParams.perspective,
            width: this.props.animParams.size,
            height: this.props.animParams.size
        }

        let cardClasses = classnames({
            'u-fit': true,
            'FlipCard-card': true
        })

        return (
            <div className="FlipCard" style={ style } onClick={ this.onClick }>
                <CSSTransitionGroup
                    className={ cardClasses }
                    transitionName="FlipCard-card-"
                    transitionAppear={ false }>
                    { children }
                </CSSTransitionGroup>
            </div>
        )
    }
}
