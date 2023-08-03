import * as React from 'react';

type UpdaptInputProp = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    type: any;
    width: number;
    isError?: boolean;
};
declare function UpdaptInput({ type, isError, width, ...rest }: UpdaptInputProp): React.JSX.Element;

export { UpdaptInput, UpdaptInputProp };
