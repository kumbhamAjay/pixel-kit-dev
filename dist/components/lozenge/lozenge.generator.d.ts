/// <reference types="react" />
import { PiLozengeProps } from './lozenge';
/**
 *
 * @param props as  PiLozengeProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateLozengeTemplate({ libraryType, ...props }: PiLozengeProps): JSX.Element;
