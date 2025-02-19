/// <reference types="react" />
import { PiTooltipProps } from './tooltip';
/**
 *
 * @param props as  PiTooltipProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateTooltipTemplate({ libraryType, ...props }: PiTooltipProps): JSX.Element;
