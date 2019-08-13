/// <reference types="react" />
import SharedAnimationProvider from './Context/SharedAnimationProvider';
import SharedAnimation from './Context/SharedAnimation';
declare const _default: {
    SharedAnimationProvider: typeof SharedAnimationProvider;
    connectSharedAnimation: (mapValuesToProps: import("./HOC/types").MapValuesToProps) => (WrappedComponent: "symbol" | "object" | "big" | "link" | "small" | "sub" | "sup" | "track" | "progress" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "map" | "mark" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "q" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "source" | "span" | "strong" | "style" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "u" | "ul" | "var" | "video" | "wbr" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "path" | "metadata" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "svg" | "stop" | "switch" | "tspan" | "text" | "textPath" | "use" | "view" | "bdi" | "keygen" | "main" | "menuitem" | "noindex" | "rp" | "summary" | "webview" | "animate" | "animateMotion" | "animateTransform" | "feDropShadow" | "mpath" | import("react").ComponentClass<any, any> | import("react").FunctionComponent<any> | import("react").ComponentClass<{}, any> | import("react").FunctionComponent<{}>) => {
        new (props: Readonly<{}>): {
            values(): object;
            render(): JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callBack?: (() => void) | undefined): void;
            readonly props: Readonly<{}> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
        };
        new (props: {}, context?: any): {
            values(): object;
            render(): JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callBack?: (() => void) | undefined): void;
            readonly props: Readonly<{}> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
        };
        contextType: any;
    };
    SharedAnimation: typeof SharedAnimation;
    useSharedAnimation: (value?: string | undefined) => import("./Context/SharedAnimationContext").AnimationContextType;
};
export default _default;
