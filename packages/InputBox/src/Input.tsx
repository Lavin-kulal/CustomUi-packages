import * as React from "react";
import "./style.css";

export type UpdaptInputProp = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  type: any;
  width: number;
};

export function UpdaptInput({
  type,

  width,
  ...rest
}: UpdaptInputProp) {
  return (
    <>
      <input
        className="input"
        style={{ width: `${width}px` }}
        type={type}
        {...rest}
      />
    </>
  );
}
