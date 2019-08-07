import { createContext } from 'react';
import Animated from 'react-native-reanimated';
import { AnimatedType } from '../types';

export interface AnimationContextType {
	getValue: (name: string) => AnimatedType;
	newValue: (name: string, value: AnimatedType) => AnimatedType;
	animatedValues: { [key: string]: AnimatedType };
}

// const SharedAnimationContext = createContext({
// 	getValue: () => console.error('SharedAnimation not properly initialized'),
// 	setValue: () => console.error('SharedAnimation not properly initialized'),
// 	animatedValues: {},
// });

const SharedAnimationContext = createContext();
SharedAnimationContext.displayName = 'SharedAnimation';

export default SharedAnimationContext;
