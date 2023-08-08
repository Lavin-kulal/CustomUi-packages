import * as React from "react";
import "./styles.css";

export type UpdaptSearchProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "disabled"
> & {
  width: number;
  disabled?: boolean;
};

export function UpdaptSearchInput({
  width,
  disabled,
  ...rest
}: UpdaptSearchProps) {
  return (
    <>
      <input
        type="search"
        className="updapt-search-input"
        style={{ width: `${width}px` }}
        disabled={disabled}
        {...rest}
      />
    </>
  );
}
