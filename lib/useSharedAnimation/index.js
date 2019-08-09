import { useContext } from 'react';
import AnimationContext from '../Context/SharedAnimationContext';

var useSharedAnimation = function useSharedAnimation() {
  var _useContext = useContext(AnimationContext),
      getValue = _useContext.getValue,
      newValue = _useContext.newValue,
      animatedValues = _useContext.animatedValues;

  var obj = {
    getValue: getValue,
    newValue: newValue,
    animatedValues: animatedValues
  };
  return obj;
};

export default useSharedAnimation;