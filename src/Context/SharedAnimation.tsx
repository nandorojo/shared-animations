// @ts-ignore
import React from 'react';
import AnimationContext, { AnimationContextType } from './SharedAnimationContext';

interface AnimationConsumerProps {
	children: (context: AnimationContextType) => React.ReactNode;
}

export default class SharedAnimation extends React.Component<AnimationConsumerProps> {
	render() {
		return (
			<AnimationContext.Consumer>
				{(context: AnimationContextType) => this.props.children(context)}
			</AnimationContext.Consumer>
		);
	}
}
