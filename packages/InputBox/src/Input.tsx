import * as React from "react";
import "./style.css";

export type UpdaptInputProp = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  type: any;
  width: number;
  isError?: boolean;
  value?: string;
};

export function UpdaptInput({
  type,
  isError,
  width,
  value,
  ...rest
}: UpdaptInputProp) {
  return (
    <>
      <input
        className={
          value || isError
            ? `updapt-input-filled ${isError ? "error" : "no-error"}`
            : "updapt-input-not-filled"
        }
        style={{ width: `${width}px` }}
        type={type}
        {...rest}
      />
    </>
  );
}
