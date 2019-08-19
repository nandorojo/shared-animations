import React from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';
import useSharedAnimation from '../lib/useSharedAnimation/index';
import SharedAnimationProvider from '../lib/Context/SharedAnimationProvider';
import { ReText } from 'react-native-redash';
import connectSharedAnimation from '../lib/HOC/connectSharedAnimation';

const { Value, event, divide } = Animated;

export default () => {
	const scroll = new Value(0);

	const animatedValues = { scroll };

	return (
		<SharedAnimationProvider animatedValues={animatedValues}>
			<App />
		</SharedAnimationProvider>
	);
};

const App = () => {
	const { newValue, getValue } = useSharedAnimation();

	const scroll = getValue('scroll');

	const opacity = scroll.interpolate({
		inputRange: [0, 800],
		outputRange: [1, 0],
	});
	newValue('opacity', opacity);

	// notice...no props passed 👀
	return (
		<View style={{ flex: 1 }}>
			<ConnectedSlider />
			<ConnectedScroller />
		</View>
	);
};

class Scroller extends React.Component {
	private onScroll;
	constructor(props) {
		super(props);

		this.onScroll = event([
			{
				nativeEvent: {
					contentOffset: {
						y: props.scroll,
					},
				},
			},
		]);
	}
	render() {
		let backgrounds = ['red', 'green', 'pink', 'yellow', 'orange', 'black', 'purple'];
		backgrounds.forEach(() => backgrounds.push(...backgrounds));

		return (
			<View style={styles.scroller}>
				<Text style={[styles.text, styles.bold]}>{`<Scroller />`}</Text>
				<Text style={styles.text}>
					Scroller and Slider have no props passed to them, but they still share an
					animated value!
				</Text>
				<Text style={[styles.bold, styles.text, styles.header]}>Scroll below!</Text>
				<Animated.ScrollView scrollEventThrottle={16} onScroll={this.onScroll}>
					{backgrounds.map((backgroundColor, index) => (
						<View key={index.toString()} style={{ height: 50, backgroundColor }} />
					))}
				</Animated.ScrollView>
			</View>
		);
	}
}

const ConnectedScroller = connectSharedAnimation('scroll')(Scroller);

// you can also use the HOC with a functional component
const Slider = ({ scroll, opacity }) => {
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

const mapValuesToProps = animatedValues => ({
	scroll: animatedValues.scroll,
	opacity: animatedValues.opacity,
});

const ConnectedSlider = connectSharedAnimation(mapValuesToProps)(Slider);

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
