/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare class PiChartProps extends BaseProps {
    text?: string;
    series?: Number[];
    categories?: string[];
}
/**
 *
 * @param props this component takes PiChartProps as input
 * @returns  returns input component based on library type
 */
export default function PiChart(props: PiChartProps): JSX.Element;
