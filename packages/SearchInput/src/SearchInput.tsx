import React, { CSSProperties } from "react";
import "./styles.css";
import images from "./Common/imageVaribale";
import icons from "./icons/icons";

interface UpdaptSearchProps
  extends React.AllHTMLAttributes<
    HTMLInputElement | HTMLFormElement | HTMLDivElement
  > {
  styles?: {
    root?: CSSProperties;
    icon?: CSSProperties;
    input?: CSSProperties;
  };
}
export function UpdaptSearchInput(props: UpdaptSearchProps) {
  const { width, disabled, value, styles, ...rest } = props;
  const formProps: React.FormHTMLAttributes<HTMLFormElement> = {
    className: `updapt-form-search-input-cover ${
      disabled ? "disabled" : "not-disabled"
    }`,
    ...rest,
    style: styles?.root,
  };
  const divProps: React.HTMLAttributes<HTMLDivElement> = {
    className: "updapt-input-search-icon",
    ...rest,
    style: styles?.icon,
  };
  const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
    type: "search",
    className: `updapt-search-input ${disabled ? "disabled" : "not-disabled"}`,
    ...rest,
    style: styles?.input,
  };

  return (
    <form {...formProps}>
      <div {...divProps}>{icons.search}</div>
      <input {...inputProps} />
    </form>
  );
}
