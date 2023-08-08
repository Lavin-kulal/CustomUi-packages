import * as React from 'react';

type UpdaptTextAreaProp = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
    width: number;
    isError?: boolean;
    value?: string;
};
declare function UpdaptInput({ width, isError, value, ...rest }: UpdaptTextAreaProp): React.JSX.Element;

export { UpdaptInput, UpdaptTextAreaProp };
