import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import useSharedAnimation from '../lib/useSharedAnimation/index';
import Animated from 'react-native-reanimated';
import { ReText } from 'react-native-redash';

import SharedAnimationProvider from '../lib/Context/SharedAnimationProvider';

const { Value, event, interpolate, divide } = Animated;

export default () => {
	// first, declare a new animated value called scroll
	const scroll = new Value(0);

	// dictionary with all your initialized animatedValues
	// pass this as a prop to SharedAnimationProvider
	const animatedValues = { scroll };

	return (
		<SharedAnimationProvider animatedValues={animatedValues}>
			<ScrollAndOpacity />
		</SharedAnimationProvider>
	);
};

const ScrollAndOpacity = () => {
	const {
		newValue,
		// read in the scroll value created above
		animatedValues: { scroll },
	} = useSharedAnimation();

	// just for fun, let's declare another global animated node here...
	// we initialize a SECOND animated value, opacity, nested inside of the provider
	const opacity = interpolate(scroll, {
		inputRange: [0, 800],
		outputRange: [1, 0],
	});
	newValue('opacity', opacity);

	// notice that we pass do *not* need to pass this value as a prop
	// why? because it's globally accessible
	return (
		<View style={{ flex: 1 }}>
			<Slider />
			<Scroller />
		</View>
	);
};

const Scroller = () => {
	// you can destructure an animation value like this
	// (if you do, remember to do .animatedValues at the end of the hook)
	const { getValue } = useSharedAnimation();

	// get the global scroll animated value
	const scroll = getValue('scroll');
	// update the scroll value when you scroll using Animated.event
	const onScroll = event([
		{
			nativeEvent: {
				contentOffset: {
					y: scroll,
				},
			},
		},
	]);

	// make a big list of colors
	let backgrounds = ['red', 'green', 'pink', 'yellow', 'orange', 'black', 'purple'];
	backgrounds.forEach(() => backgrounds.push(...backgrounds));

	return (
		<View style={styles.scroller}>
			<Text style={[styles.bold, styles.text]}>Scroll below!</Text>
			<Text style={styles.text}>
				This component doesn't share any direct props from the one above it.
			</Text>
			<Text />
			<Animated.ScrollView scrollEventThrottle={16} onScroll={onScroll}>
				{backgrounds.map((backgroundColor, index) => (
					<View key={index.toString()} style={{ height: 50, backgroundColor }} />
				))}
			</Animated.ScrollView>
		</View>
	);
};

const Slider = () => {
	// we can also access the values using the getValue function, unlike Scroller()
	const { getValue } = useSharedAnimation();

	const scroll = getValue('scroll');
	const opacity = getValue('opacity');

	const translateX = divide(scroll, 4);

	return (
		<View style={styles.slider}>
			<Animated.View
				style={[
					styles.box,
					{
						transform: [
							{
								translateX,
							},
						],
						opacity,
					},
				]}
			/>
			<Text>Animated Value: </Text>
			{/* <ReText text={scroll} /> */}
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		padding: 10,
	},
	bold: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	box: {
		height: 100,
		width: 100,
		backgroundColor: 'blue',
	},
	slider: { flex: 0.5, justifyContent: 'center', padding: 10 },
	scroller: { flex: 1, borderTopWidth: 1 },
});
