import * as React from "react";
import "./style.css";
export type UpdaptInputProp = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    type: any;
    width: number;
    isError?: boolean;
};
export declare function UpdaptInput({ type, isError, width, ...rest }: UpdaptInputProp): React.JSX.Element;
