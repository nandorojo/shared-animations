import { createContext } from 'react';
// const SharedAnimationContext = createContext({
// 	getValue: () => console.error('SharedAnimation not properly initialized'),
// 	setValue: () => console.error('SharedAnimation not properly initialized'),
// 	animatedValues: {},
// });
const SharedAnimationContext = createContext();
SharedAnimationContext.displayName = 'SharedAnimation';
export default SharedAnimationContext;
