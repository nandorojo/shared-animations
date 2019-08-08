import React from 'react';
import AnimationContext from '../Context/SharedAnimationContext';
import getValues from '../helpers/getValues';
const connectSharedAnimation = (mapValuesToProps) => {
    return (WrappedComponent) => {
        var _a;
        return _a = class extends React.Component {
                values() {
                    const { context } = this;
                    return getValues(mapValuesToProps, context);
                }
                render() {
                    const { newValue, getValue } = this.context;
                    const { values } = this;
                    return (<WrappedComponent {...this.props} {...Object.assign({ getValue, newValue }, values())}/>);
                }
            },
            _a.contextType = AnimationContext,
            _a;
    };
};
export default connectSharedAnimation;
