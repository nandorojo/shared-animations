import { createContext } from 'react';
import { AnimatedType } from '../types';

export interface Context {
	getValue: (name: string) => AnimatedType;
	newValue: (name: string, value: AnimatedType) => AnimatedType;
	animatedValues: { [key: string]: AnimatedType };
}

export type AnimationContextType =
	| Context
	| {
			getValue: () => void;
			newValue: () => void;
			animatedValues: {};
	  };

// const SharedAnimationContext = createContext({
// 	getValue: () => console.error('SharedAnimation not properly initialized'),
// 	setValue: () => console.error('SharedAnimation not properly initialized'),
// 	animatedValues: {},
// });

const SharedAnimationContext = createContext({
	getValue: (name: string) => name,
	newValue: (_: string, value: AnimatedType) => value,
	animatedValues: {},
});
// const SharedAnimationContext = createContext();
SharedAnimationContext.displayName = 'SharedAnimation';

export default SharedAnimationContext;
