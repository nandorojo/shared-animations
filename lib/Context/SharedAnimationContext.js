import { createContext } from 'react';
// const SharedAnimationContext = createContext({
// 	getValue: () => console.error('SharedAnimation not properly initialized'),
// 	setValue: () => console.error('SharedAnimation not properly initialized'),
// 	animatedValues: {},
// });
var SharedAnimationContext = createContext({
  getValue: function getValue(name) {
    return name;
  },
  newValue: function newValue(_, value) {
    return value;
  },
  animatedValues: {}
}); // const SharedAnimationContext = createContext();

SharedAnimationContext.displayName = 'SharedAnimation';
export default SharedAnimationContext;