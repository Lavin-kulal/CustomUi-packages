import * as React from 'react';

type UpdaptInputProp = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    type: any;
    width: number;
};
declare function UpdaptInput({ type, width, ...rest }: UpdaptInputProp): React.JSX.Element;

export { UpdaptInput, UpdaptInputProp };
