import Animated from 'react-native-reanimated';
import { Animated as NativeAnimated } from 'react-native';
declare type ReanimatedType = Animated.Value<any> | Animated.Node<any> | Animated.Clock | Animated.SpringConfig | Animated.SpringState | Animated.DecayState | Animated.TimingState | Animated.Adaptable<any> | Animated.BackwardCompatibleWrapper | Animated.EasingFunction;
declare type NativeType = NativeAnimated.AnimatedValue | NativeAnimated.AnimatedValueXY | NativeAnimated.AnimatedMultiplication | NativeAnimated.AnimatedInterpolation;
export declare type AnimatedType = ReanimatedType | NativeType;
export {};
