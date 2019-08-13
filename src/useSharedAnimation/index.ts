import { useContext } from 'react';
import AnimationContext, { AnimationContextType } from '../Context/SharedAnimationContext';

const useSharedAnimation = (value?: string) => {
	const { getValue, newValue, animatedValues }: AnimationContextType = useContext(
		AnimationContext,
	);

	const obj: AnimationContextType = { getValue, newValue, animatedValues };
	return obj;
};
export default useSharedAnimation;
