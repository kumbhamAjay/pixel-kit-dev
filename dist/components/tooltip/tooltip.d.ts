import React from 'react';
import { BaseProps } from '../../piConstant';
export declare class PiTooltipProps extends BaseProps {
    content: any;
    position?: any;
    component?: any;
    children: React.ReactNode;
}
/**
 *
 * @param props this component takes PiInputProps as input
 * @returns  returns component based on library type
 */
export default function PiTooltip(props: PiTooltipProps): JSX.Element;
