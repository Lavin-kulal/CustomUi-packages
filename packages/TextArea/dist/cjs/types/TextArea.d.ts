import React, { CSSProperties } from "react";
import "./styles.css";
export type UpdaptTextAreaProp = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
    styles?: {
        root?: CSSProperties;
        label?: CSSProperties;
        input?: CSSProperties;
    };
    isError?: boolean;
    errorMessage?: string;
    isWarning?: boolean;
    warningMessage?: string;
};
export declare function UpdaptTextArea(props: UpdaptTextAreaProp): React.JSX.Element;
