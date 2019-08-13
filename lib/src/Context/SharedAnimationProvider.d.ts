import React from 'react';
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
    animatedValues: AnimatedValues;
    constructor(props: ProviderProps);
    getState(): AnimatedValues;
    get(mapValuesToProps: MapValuesToProps): object;
    getValue(name: string): any;
    newValue(name: string, value: AnimatedType): any;
    render(): JSX.Element;
}
export {};
