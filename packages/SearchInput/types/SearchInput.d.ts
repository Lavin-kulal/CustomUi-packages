import * as React from "react";
import "./styles.css";
export type UpdaptSearchProps = Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "disabled"> & {
    width: number;
};
export declare function UpdaptSearchInput({ width, ...rest }: UpdaptSearchProps): React.JSX.Element;
