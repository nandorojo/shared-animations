import { createContext } from 'react'
import { AnimatedType } from '../types/index'

export interface AnimationContextType {
	getValue: (name: string) => AnimatedType
	newValue: (name: string, value: AnimatedType) => AnimatedType
	animatedValues: { [key: string]: AnimatedType }
}

// const SharedAnimationContext = createContext({
// 	getValue: () => console.error('SharedAnimation not properly initialized'),
// 	setValue: () => console.error('SharedAnimation not properly initialized'),
// 	animatedValues: {},
// });

// @ts-ignore
const SharedAnimationContext = createContext()
SharedAnimationContext.displayName = 'SharedAnimation'

export default SharedAnimationContext
