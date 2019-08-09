# 🕺 react-native-shared-animation

A global state management tool, built for react-native's `Animated` values.

Like redux for animations.

## Why?

**Sharing animated values across components should be easy.** However, it currently requires so much prop drilling that any complex animation in `react-native` becomes a hassle to manage.

## Quick setup

The boilerplate setup takes about 15 seconds and is similar to redux in how it works. Just wrap your entire app with the `<SharedAnimationProvider />` component.

**App.js**

```javascript
import React from 'react';
import { SharedAnimationProvider } from 'react-native-shared-animation';
import Animated from 'react-native-reanimated';
import App from './src/App';

export default () => {
	const animatedValues = { myCoolAnimatedValue: new Animated.Value(0) };
	return (
		<SharedAnimationProvider animatedValues={animatedValues}>
			<App />
		</SharedAnimationProvider>
	);
};
```

In some other nested component, all you'd need to do is this:

```javascript
import React from 'react';
import { useSharedAnimation } from 'react-native-shared-animation';
import Animated from 'react-native-reanimated';

export default () => {
	// here we get the value from our global store using react hooks
	const { getValue } = useSharedAnimation();
	const coolValue = getValue('myCoolAnimatedValue');

	return <Animated.View style={{ width: coolValue }} />;
};
```

You can also use the `connectSharedAnimation` HOC or the `<SharedAnimation />` component if you don't want to use the `useSharedAnimation` hook.

🎉 **All set. Your app is now ready to share animated values across components.**

Below I'll expand on all the ways that you're able to **1) initialize animated values** and **2) access animated values**.

## Examples

**To see full examples, go to the [/examples]() folder.** You can also see the Expo snack of examples [here]().

## Installation

To install, open your react native repository in the terminal and run this command:

```
npm i @nandorojo/shared-animations
```

You could use yarn if you prefer that:

```
yarn add @nandorojo/shared-animations
```

**Recommended:** If you want to use [`react-native-reanimated`](https://github.com/kmagiera/react-native-reanimated) for animations, run this afterwards:

```
npm i react-native-reanimated react-native-gesture-handler
```

### This works with...

✅ `react-native-reanimated`

✅ `Animated` from `react-native` if you prefer that.

✅ `Expo`

✅ `Typescript`

✅ `react-native-gesture-handler`

## 1) Initializing shared animated values

You have two options for initializing shared animation values: global initialization or on-the-fly initializiation in components.

### i) [Recommended] Initialize global animated values

Simply pass an `animatedValues` object as a prop to the `<SharedAnimationProvider />` component. This will act as the initial set of animated values.

You can initialize as many animated values as you'd like.

**App.js**

```javascript
import React from 'react'
import { SharedAnimationProvider } from 'react-native-shared-animation'
import Animated from 'react-native-reanimated'
import App from './src/App' // path to your root component

export default () => {
	const mainScrollValue = new Animated.Value(0)
	const animatedValues = { mainScrollValue }

	<SharedAnimationProvider animatedValues={animatedValues}>
		<App />
	</SharedAnimationProvider>
}

```

**🐻 That's it! Your app now has globally-accessible animated values.**

In this case, `mainScrollValue` can be accessed by **any** component.

If you come from a redux background, you can think of this like setting the initial store value.

#### Why this is the better option:

From a style perspective, it is useful to know what values will be accessible across your app upon initialization. And when it comes to performance, this is less prone to bugs, since you'll never try to access a value that hasn't been initialized.

That said, you also have the `newValue` method to your disposal, as described in the next option.

### **ii) [Careful] Initialize animated values on the fly in components**

You can also initialize animated values directly in components. The thing is, this option is more prone to bugs, since you might try to access an animated value before it's been initialized.

Overall, I'd suggest only using this one on a case-by-case basis.

It can be achieved with the `newValue(name, value)` function, documented [below]().

## 2) Accessing animated values

Here's the fun part.

---

### There are 3 ways to access animated values

These are the 3 options you have:

1. **`useSharedAnimation` hook:** The `useSharedAnimation` hook is super simple (and is my favorite to use). Only works in function components. See react hooks to learn more.

2. **`connectSharedAnimation` HOC:** You can use the `connectSharedAnimation` higher-order component. Useful for class components and function components. Good for taking animation logic out of a component, too.

3. **`SharedAnimation` component:** You can also wrap any component with `<SharedAnimation />` to connect it to the global animation state.

---

### Option 1: `useSharedAnimation`

Call `useSharedAnimation` in the root of a function component.

**Example:**

```javascript
...
import { useSharedAnimation } from 'react-native-shared-animation'

export default () => {
	const { getValue, newValue, animatedValues } = useSharedAnimation();
	const scroll = getValue('scroll')
	// same as...
	const { scroll } = animatedValues;

	return <Animated.View style={{ ..., translateX: scroll }} />
}

```

So simple!

🤑🤑

**If you're using a version of react / react-native that supports hooks, you can happily stop reading the docs here and just use this.**

--

### Option 2: `connectSharedAnimation(mapValuesToProps)(Component)`

You can also use the `connectSharedAnimation` higher-order component to pass animated values as props.

This option gives you some customization options beyond the `useSharedAnimation`, such as taking global animated code out of your actual component.

**This HOC passes `newValue`, `getValue`, and any animated values you choose as props to your `Component`.**

**Example:**

```javascript
...
import { connectSharedAnimation } from 'react-native-shared-animation'

const ConnectedComponent = ({ getValue, newValue, scroll }) => {
	return <Animated.View style={{ ..., translateX: scroll }} />
}

// determine which values you want to pass to this component
const mapValuesToProps = animatedValues => ({
	scroll: animatedValues.scroll
})

// could also have done this:
// const mapValuesToProps = 'scroll'

// ...or this:
// const mapValuesToProps = ['scroll', 'someOtherValue']

export default connectSharedAnimation(mapValuesToProps)(ConnectedComponent)

```

#### `mapValuesToProps` (required)

This is the first and only argument for `connectSharedAnimation`. It determines which animated values will be passed to the component as direct props.

This value can be either a `string`, `array of strings`, a `function`, or `null`.

**mapValuesToProps as a string**

The string should correspond to an existing global animated value.

```javascript
...
import { connectSharedAnimation } from 'react-native-shared-animation'

const ConnectedComponent = ({ getValue, newValue, scroll }) => {
	return <Animated.View style={{ ..., translateX: scroll }} />
}

const mapValuesToProps = 'scroll'

export default connectSharedAnimation(mapValuesToProps)(ConnectedComponent)

```

**mapValuesToProps as an array of strings**

Enter the names of multiple global animated values you want passed as direct props.

```javascript
...
import { connectSharedAnimation } from 'react-native-shared-animation'

const ConnectedComponent = ({ getValue, newValue, scroll, someOtherValue }) => {
	return <Animated.View style={{ ..., translateX: scroll }} />
}

// const mapValuesToProps = ['scroll', 'someOtherValue']

export default connectSharedAnimation(mapValuesToProps)(ConnectedComponent)

```

**mapValuesToProps a function**

A function that takes in `animatedValues` as its first argument and returns an object that references these values. This can be useful if you want to abstract some animation logic out of your component.

```javascript
...
import { connectSharedAnimation } from 'react-native-shared-animation'

const ConnectedComponent = ({ getValue, newValue, scroll, opacity }) => {
	return <Animated.View style={{ ..., translateX: scroll }} />
}

const mapValuesToProps = animatedValues => {
	const { scroll } = animatedValues;
	const opacity = interpolate(scroll, {
		inputRange: [0, 400],
		outputRange: [1, 0]
	})
	return {
		scroll,
		opacity
	}
}

export default connectSharedAnimation(mapValuesToProps)(ConnectedComponent)

```

_The function works the same as redux's `mapStateToProps`._

**mapStateToValues as null**

You can pass `null` to it if you don't want any animated values explicitly passed to the component. If you pass `null`, you will still have access to `getValue` and `newValue`.

### Option 3: `SharedAnimation` Component

A basic component that uses the render props method. (Similar in principle to the `[Query]()` component from `react-apollo`.)

```javascript
...
import { SharedAnimation } from 'react-native-shared-animation'

export default () => {
	return (
		<SharedAnimation>
			{({ getValue, newValue }) => {
				const scroll = getValue('scroll')
				return (
					<YourComponent scroll={scroll} />
				)
			})}
		</SharedAnimation>
	)
}

```

---

### **`getValue(name)`**

A function that takes in the name of a global animated value and returns the animated value itself.

_This is the most important function that you'll find yourself using all the time._

**Example**

```javascript
const SomeComponent = () => {
	const { getValue } = useSharedAnimation();

	const opacity = getValue('opacity');

	return <Animated.View style={{ opacity }} />;
};
```

### **`animatedValues`**

A dictionary containing the current global state of animated values. You can use this to access the global store directly, but I recommend using `getValue` instead, since it has some added convenience checks.

**Example**

```javascript
const SomeComponent = () => {
	const { animatedValues } = useSharedAnimation();

	const { opacity } = animatedValues;

	return <Animated.View style={{ opacity }} />;
};
```

### **`newValue(name, value)`**

A function that creates a new global animated value. Takes a name as the first argument, and an animated value (or node) as the second argument.

**Returns:** the animated value it just created

**Example**

```javascript
const SomeComponent = () => {
	const { newValue } = useSharedAnimation();

	const opacity = newValue('opacity', new Animated.Value(1));

	return <Animated.View style={{ opacity }} />;
};
```

---

## Documentation Recap

### `<SharedAnimationProvider />`

| **Prop** | Required | Type | Example |
| --- | --- | --- | --- |
| `animatedValues` | no (but recommended) | `dictionary` | `{ scroll: new Animated.Value(0) }` |
| `children` | yes | `React.Node` | Your app JSX should be a child component of this provider. |

## Illustrative example

Sharing animated values across your entire app is as easy as this:

```javascript
import React from 'react';
import Animated from 'react-native-reanimated';
import { SharedAnimationProvider, useSharedAnimation } from 'react-native-shared-animation';

export default function App() {
	const animatedValues = { scroll: new Animated.Value(0) };
	return (
		<SharedAnimationProvider animatedValues={animatedValues}>
			<ComponentWithScrollView />
			<OtherComponentThatAccessesScroll />
		</SharedAnimationProvider>
	);
}

const OtherComponentThatAccessesScroll = () => {
	const { getValue } = useSharedAnimation();
	const scroll = getValue('scroll');

	return <Animated.View style={{ translateX: scroll }} />;
};

const ComponentWithScrollView = () => {
	const { getValue } = useSharedAnimation();
	const scroll = getValue('scroll');
	const onScroll = Animated.event([
		{
			nativeEvent: {
				contentOffset: {
					y: scroll,
				},
			},
		},
	]);

	return <Animated.ScrollView onScroll={onScroll} />;
};
```

Yup, that's it. No prop drilling at all.
