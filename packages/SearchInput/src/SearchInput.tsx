import * as React from "react";
import "./styles.css";
import images from "./Common/imageVaribales";
import { UpdaptInput } from "input-lerna-component";
export type UpdaptSearchInputProp = {
  width: number;
};

export function UpdaptSearchInput({ width }: UpdaptSearchInputProp) {
  return (
    <>
      <img
        src={images.SearchIcon}
        alt="Search Icon"
        className="updpat-search-icon-image"
      />
      <UpdaptInput type={"search"} width={width} />
    </>
  );
}
