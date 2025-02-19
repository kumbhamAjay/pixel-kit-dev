/// <reference types="react" />
import { PiSearchProps } from './search';
/**
 *
 * @param props as  PiSearchProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateSearchTemplate({ libraryType, ...props }: PiSearchProps): JSX.Element;
