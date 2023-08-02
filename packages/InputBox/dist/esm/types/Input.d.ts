import * as React from "react";
import "./style.css";
export type UpdaptInputProp = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    type: any;
    width: number;
};
export declare function UpdaptInput({ type, width, ...rest }: UpdaptInputProp): React.JSX.Element;
