import * as React from "react";
import "./style.css";

export type UpdaptInputProp = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  type: any;
  width: number;
  isError?: boolean;
  value?: any;
};

export function UpdaptInput({
  type,
  isError,
  width,
  value,
  ...rest
}: UpdaptInputProp) {
  function isErrorClassName(isError: boolean): string {
    if (isError) {
      return "error";
    } else {
      return "no-error";
    }
  }
  return (
    <>
      <input
        className={
          value || isError
            ? `updapt-input-filled ${isErrorClassName(isError!)}`
            : "updapt-input-not-filled"
        }
        style={{ width: `${width}px` }}
        type={type}
        value={value}
        {...rest}
      />
    </>
  );
}
