import * as React from "react";
import "./style.css";
export type UpdaptInputProp = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    type: any;
    className?: string;
};
export declare function UpdaptInput({ type, className, ...rest }: UpdaptInputProp): React.JSX.Element;
