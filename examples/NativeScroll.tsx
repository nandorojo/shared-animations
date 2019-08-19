import React from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';
import useSharedAnimation from '../lib/useSharedAnimation/index';
import SharedAnimationProvider from '../lib/Context/SharedAnimationProvider';
import { ReText } from 'react-native-redash';

// This example uses react-native's Animated
// If you want to see the same example with react-native-reanimated, see ReanimatedScroll
const { Value, event, divide } = Animated;

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
	const opacity = scroll.interpolate({
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
			<Text style={[styles.text, styles.bold]}>{`<Scroller />`}</Text>
			<Text style={styles.text}>
				Scroller and Slider have no props passed to them, but they still share an animated
				value!
			</Text>
			<Text style={[styles.bold, styles.text, styles.header]}>Scroll below!</Text>
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
			<Text style={[styles.text, styles.bold]}>{`<Slider />`}</Text>
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
			<ReText text={scroll} />
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		padding: 10,
	},
	bold: {
		fontWeight: 'bold',
	},
	header: {
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
