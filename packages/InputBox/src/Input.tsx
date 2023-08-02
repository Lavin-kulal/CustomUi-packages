import * as React from "react";
import "./style.css";

export type UpdaptInputProp = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  type: any;
  width: number;
  className?: string;
};

export function UpdaptInput({
  type,
  className,
  width,
  ...rest
}: UpdaptInputProp) {
  return (
    <>
      <input
        className={className ?? "input"}
        style={{ width: `${width}px` }}
        type={type}
        {...rest}
      />
    </>
  );
}
