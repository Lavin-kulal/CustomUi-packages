import * as React from "react";
import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export type UpdaptDatePickerProps = {
  width: number;
};

export function UpdaptDatePicker({ width }: UpdaptDatePickerProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  return (
    <>
      <DatePicker
        className="updapt-date-picker"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
      />
    </>
  );
}
