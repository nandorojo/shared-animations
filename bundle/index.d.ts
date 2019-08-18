/// <reference types="react" />
declare module "types/index" {
    import Animated from 'react-native-reanimated';
    import { Animated as NativeAnimated } from 'react-native';
    type ReanimatedType = Animated.Value<any> | Animated.Node<any> | Animated.Clock | Animated.SpringConfig | Animated.SpringState | Animated.DecayState | Animated.TimingState | Animated.Adaptable<any> | Animated.BackwardCompatibleWrapper | Animated.EasingFunction;
    type NativeType = NativeAnimated.AnimatedValue | NativeAnimated.AnimatedValueXY | NativeAnimated.AnimatedMultiplication | NativeAnimated.AnimatedInterpolation;
    export type AnimatedType = ReanimatedType | NativeType;
}
declare module "Context/SharedAnimationContext" {
    import { AnimatedType } from "types/index";
    export interface AnimationContextType {
        getValue: (name: string) => AnimatedType;
        newValue: (name: string, value: AnimatedType) => AnimatedType;
        animatedValues: {
            [key: string]: AnimatedType;
        };
    }
    const SharedAnimationContext: any;
    export default SharedAnimationContext;
}
declare module "constants/index" {
    export const LIBRARY_NAME = "react-native-shared-animation";
}
declare module "HOC/types" {
    type MapAnimationValueToProps = (animatedValuesFromContext: object) => object;
    export type MapValuesToProps = string | string[] | MapAnimationValueToProps | null;
}
declare module "helpers/getValues" {
    import { AnimationContextType } from "Context/SharedAnimationContext";
    import { MapValuesToProps } from "HOC/types";
    const _default: (mapValuesToProps: MapValuesToProps, context: AnimationContextType) => object;
    export default _default;
}
declare module "Context/SharedAnimationProvider" {
    import React from 'react';
    import { AnimatedType } from "types/index";
    import { MapValuesToProps } from "HOC/types";
    interface AnimatedValues {
        [key: string]: AnimatedType;
    }
    interface ProviderProps {
        children: React.ReactNode;
        animatedValues?: AnimatedValues;
    }
    export default class SharedAnimationProvider extends React.Component<ProviderProps> {
        animatedValues: AnimatedValues;
        constructor(props: ProviderProps);
        getState(): AnimatedValues;
        get(mapValuesToProps: MapValuesToProps): object;
        getValue(name: string): any;
        newValue(name: string, value: AnimatedType): any;
        render(): JSX.Element;
    }
}
declare module "HOC/connectSharedAnimation" {
    import React from 'react';
    import { MapValuesToProps } from "HOC/types";
    const connectSharedAnimation: (mapValuesToProps: MapValuesToProps) => (WrappedComponent: "symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | React.ComponentClass<any, any> | React.FunctionComponent<any> | React.ComponentClass<{}, any> | React.FunctionComponent<{}>) => {
        new (props: Readonly<{}>): {
            values(): object;
            render(): JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callBack?: (() => void) | undefined): void;
            readonly props: Readonly<{}> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
        };
        new (props: {}, context?: any): {
            values(): object;
            render(): JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callBack?: (() => void) | undefined): void;
            readonly props: Readonly<{}> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
        };
        contextType: any;
    };
    export default connectSharedAnimation;
}
declare module "Context/SharedAnimation" {
    import React from 'react';
    import { AnimationContextType } from "Context/SharedAnimationContext";
    interface AnimationConsumerProps {
        children: (context: AnimationContextType) => React.ReactNode;
    }
    export default class SharedAnimation extends React.Component<AnimationConsumerProps> {
        render(): JSX.Element;
    }
}
declare module "useSharedAnimation/index" {
    import { AnimationContextType } from "Context/SharedAnimationContext";
    const useSharedAnimation: () => AnimationContextType;
    export default useSharedAnimation;
}
declare module "index" {
    import SharedAnimationProvider from "Context/SharedAnimationProvider";
    import connectSharedAnimation from "HOC/connectSharedAnimation";
    import SharedAnimation from "Context/SharedAnimation";
    import useSharedAnimation from "useSharedAnimation/index";
    export { SharedAnimationProvider, connectSharedAnimation, SharedAnimation, useSharedAnimation };
}
