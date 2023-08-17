import React, { CSSProperties } from 'react';

type UpdaptTextAreaProp = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
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
declare function UpdaptTextArea(props: UpdaptTextAreaProp): React.JSX.Element;

export { UpdaptTextArea, UpdaptTextAreaProp };
