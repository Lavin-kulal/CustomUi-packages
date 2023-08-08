import * as React from 'react';

type UpdaptDatePickerProps = {
    onChange(date: Date | null, event: React.SyntheticEvent<any, Event> | undefined): void;
};
declare function UpdaptDatePicker({ onChange }: UpdaptDatePickerProps): React.JSX.Element;

export { UpdaptDatePicker, UpdaptDatePickerProps };
