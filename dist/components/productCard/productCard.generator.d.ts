/// <reference types="react" />
import { PiProductCardProps } from './productCard';
/**
 *
 * @param props as  PiProductCardProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateProductCardTemplate({ libraryType, ...props }: PiProductCardProps): JSX.Element;
