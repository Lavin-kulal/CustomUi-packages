import * as React from "react";
import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";
export type UpdaptDatePickerProps = {
    onChange(date: Date | null, event: React.SyntheticEvent<any, Event> | undefined): void;
};
export declare function UpdaptDatePicker({ onChange }: UpdaptDatePickerProps): React.JSX.Element;
