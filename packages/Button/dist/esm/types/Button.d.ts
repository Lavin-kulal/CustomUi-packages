import * as React from "react";
import "./styles.css";
interface IUpdaptButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size: string;
    variant: string;
    disabled?: boolean;
    src?: string;
}
export declare function UpdaptButton(props: IUpdaptButtonProps): React.JSX.Element;
export {};
