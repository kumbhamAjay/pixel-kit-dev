/// <reference types="react" />
import { PiProgressIndicatorProps } from './progressIndicator';
/**
 *
 * @param props as  PiProgressIndicatorProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateProgressIndicatorTemplate({ libraryType, ...props }: PiProgressIndicatorProps): JSX.Element;
