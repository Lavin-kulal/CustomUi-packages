import * as React from "react";
import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";
export type UpdaptDatePickerProps = {
    onChange(date: Date | null, event: React.SyntheticEvent<any, Event> | undefined): void;
    width: number;
};
export declare function UpdaptDatePicker({ onChange, width }: UpdaptDatePickerProps): React.JSX.Element;
