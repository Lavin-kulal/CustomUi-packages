import * as React from "react";
import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export type UpdaptDatePickerProps = {
  onChange(
    date: Date | null,
    event: React.SyntheticEvent<any, Event> | undefined
  ): void;
  width: number;
};

export function UpdaptDatePicker({ onChange, width }: UpdaptDatePickerProps) {
  return (
    <>
      <DatePicker className="updapt-date-picker" onChange={onChange} />
    </>
  );
}
