import * as React from "react";
import "./styles.css";
import images from "./Common/imageVaribales";

export type UpdaptSearchProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  width: number;
};

export function UpdaptSearchInput({ width }: UpdaptSearchProps) {
  return (
    <>
      <input
        type="search"
        className="input-with-image"
        style={{ width: `${width}px` }}
      />
      <img
        src={images.SearchIcon}
        alt="Search Icon"
        className="updpat-search-icon-image"
      />
    </>
  );
}
