import { useContext } from 'react';
import AnimationContext from '../Context/SharedAnimationContext';
const useSharedAnimation = () => {
    const { getValue, newValue, animatedValues } = useContext(AnimationContext);
    const obj = { getValue, newValue, animatedValues };
    return obj;
};
export default useSharedAnimation;
