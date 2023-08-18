import React, { CSSProperties } from "react";
import "./styles.css";
interface UpdaptSearchProps extends React.AllHTMLAttributes<HTMLInputElement | HTMLFormElement | HTMLDivElement> {
    styles?: {
        root?: CSSProperties;
        icon?: CSSProperties;
        input?: CSSProperties;
    };
    disabled?: boolean;
}
export declare function UpdaptSearchInput(props: UpdaptSearchProps): React.JSX.Element;
export {};
