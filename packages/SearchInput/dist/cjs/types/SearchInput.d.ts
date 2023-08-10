import * as React from "react";
import "./styles.css";
export type UpdaptSearchProps = Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "disabled"> & {
    width: number;
    disabled?: boolean;
    value: any;
};
export declare function UpdaptSearchInput({ width, disabled, value, ...rest }: UpdaptSearchProps): React.JSX.Element;
