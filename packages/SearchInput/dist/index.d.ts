import * as React from 'react';

type UpdaptSearchProps = Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "disabled"> & {
    width: number;
    disabled?: boolean;
};
declare function UpdaptSearchInput({ width, disabled, ...rest }: UpdaptSearchProps): React.JSX.Element;

export { UpdaptSearchInput, UpdaptSearchProps };
