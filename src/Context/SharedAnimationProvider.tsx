import React from 'react';
import Animated from 'react-native-reanimated';
import AnimationContext from './SharedAnimationContext';
import { LIBRARY_NAME } from '../constants/index';
import getValues from '../helpers/getValues';
import { AnimatedType } from '../types';
import { MapValuesToProps } from '../HOC/types';

interface AnimatedValues {
	[key: string]: AnimatedType;
}
interface ProviderProps {
	children: React.ReactNode;
	animatedValues?: AnimatedValues;
}

export default class SharedAnimationProvider extends React.Component<ProviderProps> {
	public animatedValues: AnimatedValues;
	constructor(props: ProviderProps) {
		super(props);

		this.animatedValues = props.animatedValues || {};
		this.getValue = this.getValue.bind(this);
		this.newValue = this.newValue.bind(this);
		this.getState = this.getState.bind(this);
		this.get = this.get.bind(this);
	}
	getState() {
		return this.animatedValues;
	}
	get(mapValuesToProps: MapValuesToProps) {
		return getValues(mapValuesToProps, this);
	}
	getValue(name: string) {
		try {
			const value: AnimatedType = this.animatedValues[name];
			if (!value) {
				throw new Error(`
Error in ${LIBRARY_NAME}'s getValue() function.
👋animation value {${name}} is related to the problem
Tried to get animated value ${name}, but it failed...
This probably means this Animated value was never initialized, or it isn't a valid Animated value from react-native-reanimated.
Are you sure you initialized an Animated value using setValue(name, animatedValue) where the name is ${name}?
If that doesn't do it, try running npm i react-native-reanimated react-native-gesture-handler in the terminal.
			`);
			}
			return value;
		} catch (e) {
			console.error(e);
		}
	}
	newValue(name: string, value: AnimatedType) {
		try {
			if (!value) {
				throw new Error(`
Error in ${LIBRARY_NAME}'s newValue() function.
👋animation value ${name} is related to the problem
Expected a valid Animated.Value as the second argument, but got ${value} instead.
It should look something like this:
import Animated from 'react-native-reanimated'
const { Value } = Animated;
...
const value = new Value(initialValue)
newValue(name, value);

If that doesn't do it, try running npm i react-native-reanimated react-native-gesture-handler in the terminal.
				`);
			}
			this.animatedValues[name] = value;
			return value;
		} catch (e) {
			console.error(e);
		}
	}
	render() {
		const { children } = this.props;
		const { newValue, getValue, animatedValues } = this;
		return (
			<AnimationContext.Provider value={{ newValue, getValue, animatedValues }}>
				{children}
			</AnimationContext.Provider>
		);
	}
}

// const AnimationProvider = ({ children }: ProviderProps) => {
// 	return <AnimationContext.Provider>{children}</AnimationContext.Provider>;
// };
