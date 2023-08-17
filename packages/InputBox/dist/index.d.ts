import React, { CSSProperties } from 'react';

interface IUpdaptInputProps extends React.AllHTMLAttributes<HTMLInputElement> {
    lable?: string;
    isRequired?: boolean;
    styles?: {
        root?: CSSProperties;
        label?: CSSProperties;
        input?: CSSProperties;
    };
    isError?: boolean;
    errorMessage?: string;
    isWarning?: boolean;
    warningMessage?: string;
}
declare function UpdaptInput(props: IUpdaptInputProps): React.JSX.Element;

export { UpdaptInput };
