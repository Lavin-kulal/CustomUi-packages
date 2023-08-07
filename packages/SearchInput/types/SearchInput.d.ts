import * as React from "react";
import "./styles.css";
export type UpdaptSearchProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    width: number;
};
export declare function UpdaptSearchInput({ width }: UpdaptSearchProps): React.JSX.Element;
