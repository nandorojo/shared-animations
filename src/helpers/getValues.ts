import { AnimationContextType } from '../Context/SharedAnimationContext'
import { MapValuesToProps } from '../HOC/types'
import { AnimatedType } from '../types/index'

export default (mapValuesToProps: MapValuesToProps, context: AnimationContextType) => {
	try {
		if (typeof mapValuesToProps === 'string') {
			const key = mapValuesToProps
			return { [key]: context.getValue(key) }
		} else if (Array.isArray(mapValuesToProps)) {
			if (!mapValuesToProps.length) {
				throw new Error(
					'Error in connectSharedAnimation HOC first argument. Cannot pass empty array, expected names of valid animation values.',
				)
			}
			const validArray = mapValuesToProps.reduce((a, b) => a && typeof b === 'string', true)
			if (!validArray) {
				throw new Error(`Error in first argument of connectSharedAnimation HOC. An array was passed, but values were not all strings.
This argument should either be a string, array of strings, or object creator function that takes animatedValues as the first argument. In the first two cases, strings should correspond to the names of initialized animated values.`)
			}
			const values: { [key: string]: AnimatedType } = {}
			const valueList = mapValuesToProps
			valueList.forEach((name: string) => {
				values[name] = context.getValue(name)
			})
			return values
		} else if (typeof mapValuesToProps === 'function') {
			return mapValuesToProps(context.animatedValues)
		} else if (mapValuesToProps === undefined) {
			throw new Error(
				'mapValuesToProps argument was undefined. check instance of connectSharedAnimation HOC If you do not want to get any values, pass null as the first argument.',
			)
		} else if (mapValuesToProps === null) {
			return {}
		}
		throw new Error(`
Error with first argument passed to connectSharedAnimation() HOC
Remember to make it null if you don't want to pass any values directly.

Otherwise, this argument should either be a string, array of strings, or object creator function that takes animatedValues as the first argument.
Instead, it got ${mapValuesToProps}: (${typeof mapValuesToProps} as the type)
		`)
	} catch (e) {
		console.error(e)
		return {}
	}
}
