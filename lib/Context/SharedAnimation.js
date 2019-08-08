import React from 'react';
import AnimationContext from './SharedAnimationContext';
export default class SharedAnimation extends React.Component {
    render() {
        return (<AnimationContext.Consumer>
				{(context) => this.props.children(context)}
			</AnimationContext.Consumer>);
    }
}
