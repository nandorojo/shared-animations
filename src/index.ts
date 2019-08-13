import SharedAnimationProvider from './Context/SharedAnimationProvider';
import connectSharedAnimation from './HOC/connectSharedAnimation';
import SharedAnimation from './Context/SharedAnimation';
import useSharedAnimation from './useSharedAnimation/index';

export default {
	SharedAnimationProvider,
	connectSharedAnimation,
	SharedAnimation,
	useSharedAnimation,
};

// export class C {
// 	private ox = 10;
// 	getX = () => this.ox;
// 	setX = (newVal: number) => {
// 		this.ox = newVal;
// 	};
// }

// export let x = new C();
// export let y = { ...{ some: 'value' } };
