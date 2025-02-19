/// <reference types="react" />
import { PiBreadCrumbProps } from './breadcrumbs';
/**
 *
 * @param props as  PiBreadCrumbProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateBreadCrumbTemplate({ libraryType, ...props }: PiBreadCrumbProps): JSX.Element;
