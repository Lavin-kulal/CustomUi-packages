import * as React from "react";
import "./style.css";

export type UpdaptInputProp = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  type: any;
  width: number;
  isError?: boolean;
};

export function UpdaptInput({
  type,
  isError,
  width,
  ...rest
}: UpdaptInputProp) {
  return (
    <>
      <input
        className={`updapt ${isError ? "input-error" : "input-error"}`}
        style={{ width: `${width}px` }}
        type={type}
        {...rest}
      />
    </>
  );
}
