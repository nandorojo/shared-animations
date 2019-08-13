import { AnimatedType } from '../types';
export interface AnimationContextType {
    getValue: (name: string) => AnimatedType;
    newValue: (name: string, value: AnimatedType) => AnimatedType;
    animatedValues: {
        [key: string]: AnimatedType;
    };
}
declare const SharedAnimationContext: any;
export default SharedAnimationContext;
