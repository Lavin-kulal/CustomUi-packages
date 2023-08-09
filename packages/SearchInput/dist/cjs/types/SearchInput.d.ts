import * as React from "react";
import "./styles.css";
export type UpdaptSearchProps = Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "disabled"> & {
    width: number;
    disabled?: boolean;
    imageWidth?: number;
    imageHeight?: number;
    urlPosition?: number;
};
export declare function UpdaptSearchInput({ width, disabled, imageWidth, imageHeight, urlPosition, ...rest }: UpdaptSearchProps): React.JSX.Element;
