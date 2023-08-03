import * as React from 'react';

type UpdaptInputProp = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    type: any;
    width: number;
    isError?: boolean;
    value?: string;
};
declare function UpdaptInput({ type, isError, width, value, ...rest }: UpdaptInputProp): React.JSX.Element;

export { UpdaptInput, UpdaptInputProp };
