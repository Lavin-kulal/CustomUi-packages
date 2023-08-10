import * as React from "react";
import "./styles.css";
import images from "./Common/imageVaribale";

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
    <form
      style={{
        width: `${width}px`,
      }}
      className="updapt-form-search-input-cover"
    >
      <img className="updapt-input-search-img" src={images.searchIcon} />
      <input
        type="search"
        className="updapt-search-input"
        disabled={disabled}
        {...rest}
      />
    </form>
  );
}
