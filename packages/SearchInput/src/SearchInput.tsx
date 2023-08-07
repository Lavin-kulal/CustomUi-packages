import * as React from "react";
import "./styles.css";
import images from "./Common/imageVaribales";

export type UpdaptSearchProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "disabled"
> & {
  width: number;
  disabled: boolean;
};

export function UpdaptSearchInput({
  width,
  disabled,
  ...rest
}: UpdaptSearchProps) {
  return (
    <>
      <img
        src={images.SearchIcon}
        alt="Search Icon"
        className="updpat-search-icon-image"
      />
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
