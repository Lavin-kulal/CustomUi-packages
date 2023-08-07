import * as React from 'react';

type UpdaptSearchProps = Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "disabled"> & {
    width: number;
};
declare function UpdaptSearchInput({ width, ...rest }: UpdaptSearchProps): React.JSX.Element;

export { UpdaptSearchInput, UpdaptSearchProps };
