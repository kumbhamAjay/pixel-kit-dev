/// <reference types="react" />
import { PiTagProps } from './tag';
/**
 *
 * @param props as  PiTagProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateTagTemplate({ libraryType, ...props }: PiTagProps): JSX.Element;
