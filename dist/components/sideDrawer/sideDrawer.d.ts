/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare type PiWidthType = 'wide' | 'narrow' | 'medium' | 'full' | 'extended';
export declare class PiSideDrawerProps extends BaseProps {
    isOpen: boolean;
    children: React.ReactNode;
    onClose?: (e: any) => void;
    onCloseComplete?: (e: any) => void;
    onBackdropClose?: (e: any) => void;
    width?: PiWidthType;
}
/**
 *
 * @param props this component takes PiSideDrawerProps as input
 * @returns  returns input component based on library type
 */
export default function PiSideDrawer(props: PiSideDrawerProps): JSX.Element;
