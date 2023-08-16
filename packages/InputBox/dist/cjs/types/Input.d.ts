import React, { CSSProperties } from "react";
import "./styles.css";
type IUpdaptInputProps = React.AllHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & {
    lable?: string;
    requiredStar?: boolean;
    errorMessage?: string;
    multiline?: boolean;
    styles?: {
        root?: CSSProperties;
        label?: CSSProperties;
        input?: CSSProperties;
    };
    isError?: boolean;
    isSensitiveWord?: boolean;
    sensitiveMessage?: string;
};
export declare function UpdaptInput(props: IUpdaptInputProps): React.JSX.Element;
export {};
