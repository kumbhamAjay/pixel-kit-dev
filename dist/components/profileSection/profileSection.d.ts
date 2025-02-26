/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare type ProfileProps = {
    id: string;
    name: string;
    route: string;
    url: string;
};
export declare class PiProfileSectionProps extends BaseProps {
    items: ProfileProps[];
    userImage: string;
    placement?: 'auto-start' | 'auto' | 'auto-end' | 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-end' | 'bottom' | 'bottom-start' | 'left-end' | 'left' | 'left-start';
    onClick: (e: ProfileProps) => void;
}
/**
 *
 * @param props this component takes PiProfileSectionProps as input
 * @returns  returns component based on library type
 */
export default function PiProfileSection(props: PiProfileSectionProps): JSX.Element;
