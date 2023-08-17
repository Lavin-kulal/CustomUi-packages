import React, { CSSProperties } from 'react';

interface UpdaptSearchProps extends React.AllHTMLAttributes<HTMLInputElement | HTMLFormElement> {
    styles: {
        root: CSSProperties;
        icon: CSSProperties;
        input: CSSProperties;
    };
}
declare function UpdaptSearchInput(props: UpdaptSearchProps): React.JSX.Element;

export { UpdaptSearchInput };
