/// <reference types="react" />
import { PiFileUploaderProps } from './fileUploader';
/**
 *
 * @param props as  PiFileUploaderProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generatefileUploaderComponentTemplate({ libraryType, ...props }: PiFileUploaderProps): JSX.Element;
