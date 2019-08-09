import SharedAnimationProvider from './Context/SharedAnimationProvider';
import connectSharedAnimation from './HOC/connectSharedAnimation';
import SharedAnimation from './Context/SharedAnimation';
import useSharedAnimation from './useSharedAnimation/index';
export default {
  SharedAnimationProvider: SharedAnimationProvider,
  connectSharedAnimation: connectSharedAnimation,
  SharedAnimation: SharedAnimation,
  useSharedAnimation: useSharedAnimation
};