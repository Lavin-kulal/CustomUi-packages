import * as React from 'react';

type UpdaptSearchProps = Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "disabled"> & {
    width: number;
    disabled?: boolean;
    imageWidth?: number;
    imageHeight?: number;
};
declare function UpdaptSearchInput({ width, disabled, imageWidth, imageHeight, ...rest }: UpdaptSearchProps): React.JSX.Element;

export { UpdaptSearchInput, UpdaptSearchProps };
