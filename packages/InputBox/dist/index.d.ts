import * as React from 'react';

type UpdaptInputProp = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    type: any;
    width: number;
    className?: string;
};
declare function UpdaptInput({ type, className, width, ...rest }: UpdaptInputProp): React.JSX.Element;

export { UpdaptInput, UpdaptInputProp };
