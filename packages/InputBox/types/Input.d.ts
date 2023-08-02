import * as React from "react";
export type UpdaptInputProp = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    type: any;
    width: number;
    className?: string;
};
export declare function UpdaptInput({ type, className, width, ...rest }: UpdaptInputProp): React.JSX.Element;
