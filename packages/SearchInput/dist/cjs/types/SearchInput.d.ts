import * as React from "react";
import "./styles.css";
export type UpdaptSearchProps = Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "disabled"> & {
    width: number;
    disabled?: boolean;
    imageWidth?: number;
    imageHeight?: number;
};
export declare function UpdaptSearchInput({ width, disabled, imageWidth, imageHeight, ...rest }: UpdaptSearchProps): React.JSX.Element;
