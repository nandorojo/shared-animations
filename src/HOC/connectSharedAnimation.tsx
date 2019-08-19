// @ts-ignore
import React from 'react'
import AnimationContext, { AnimationContextType } from '../Context/SharedAnimationContext'
import getValues from '../helpers/getValues'
import { MapValuesToProps } from './types'

const connectSharedAnimation = (mapValuesToProps: MapValuesToProps) => {
	return (WrappedComponent: React.ComponentType | React.ElementType) => {
		return class extends React.Component {
			static contextType = AnimationContext
			values() {
				const { context }: { context: AnimationContextType } = this
				return getValues(mapValuesToProps, context)
			}
			render() {
				const { newValue, getValue } = this.context
				const { values } = this
				return <WrappedComponent {...this.props} {...{ getValue, newValue, ...values() }} />
			}
		}
	}
}

export default connectSharedAnimation
