import SharedAnimationProvider from './Context/SharedAnimationProvider';
import connectSharedAnimation from './HOC/connectSharedAnimation';
import SharedAnimation from './Context/SharedAnimation';
import useSharedAnimation from './useSharedAnimation/index';

const SharedAnimations = {
	SharedAnimationProvider,
	connectSharedAnimation,
	SharedAnimation,
	useSharedAnimation,
};

export default SharedAnimations;
