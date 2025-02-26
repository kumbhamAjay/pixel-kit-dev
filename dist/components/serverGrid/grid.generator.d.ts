/// <reference types="react" />
import { PiGridProps } from './grid';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
/**
 *
 * @param props as  PiGridProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateGridTemplate({ libraryType, ...props }: PiGridProps): JSX.Element;
