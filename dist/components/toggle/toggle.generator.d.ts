/// <reference types="react" />
import { PiToggleProps } from './toggle';
/**
 *
 * @param props as  PiToggleProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateToggleTemplate({ libraryType, ...props }: PiToggleProps): JSX.Element;
