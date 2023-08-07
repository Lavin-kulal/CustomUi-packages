import * as React from 'react';

type UpdaptSearchProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    width: number;
};
declare function UpdaptSearchInput({ width, disabled, ...rest }: UpdaptSearchProps): React.JSX.Element;

export { UpdaptSearchInput, UpdaptSearchProps };
