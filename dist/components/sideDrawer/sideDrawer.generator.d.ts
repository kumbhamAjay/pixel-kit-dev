/// <reference types="react" />
import { PiSideDrawerProps } from './sideDrawer';
/**
 *
 * @param props as  PiSideDrawerProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateSideDrawerTemplate({ libraryType, ...props }: PiSideDrawerProps): JSX.Element;
