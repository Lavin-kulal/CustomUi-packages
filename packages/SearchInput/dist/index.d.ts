import React, { CSSProperties } from 'react';

interface UpdaptSearchProps extends React.AllHTMLAttributes<HTMLInputElement | HTMLFormElement | HTMLDivElement> {
    styles?: {
        root?: CSSProperties;
        icon?: CSSProperties;
        input?: CSSProperties;
    };
    disabled?: boolean;
}
declare function UpdaptSearchInput(props: UpdaptSearchProps): React.JSX.Element;

export { UpdaptSearchInput };
