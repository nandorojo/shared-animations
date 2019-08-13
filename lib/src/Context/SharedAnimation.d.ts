import React from 'react';
import { AnimationContextType } from './SharedAnimationContext';
interface AnimationConsumerProps {
    children: (context: AnimationContextType) => React.ReactNode;
}
export default class SharedAnimation extends React.Component<AnimationConsumerProps> {
    render(): JSX.Element;
}
export {};
