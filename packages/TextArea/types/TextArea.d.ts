import * as React from "react";
import "./styles.css";
export type UpdaptTextAreaProp = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
    width: number;
    isError?: boolean;
    value?: string;
};
export declare function UpdaptTextArea({ width, isError, value, ...rest }: UpdaptTextAreaProp): React.JSX.Element;
