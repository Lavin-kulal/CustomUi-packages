import React, { CSSProperties } from 'react';

interface IUpdaptInputProps extends React.AllHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
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
}
declare function UpdaptInput(props: IUpdaptInputProps): React.JSX.Element;

export { UpdaptInput };
