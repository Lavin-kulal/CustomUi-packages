import React, { CSSProperties } from "react";
import "./styles.css";
import icons from "./icons/icons";

interface UpdaptSearchProps
  extends React.AllHTMLAttributes<HTMLInputElement | HTMLDivElement> {
  styles?: {
    root?: CSSProperties;
    icon?: CSSProperties;
    input?: CSSProperties;
  };
  disabled?: boolean;
}
export function UpdaptSearchInput(props: UpdaptSearchProps) {
  const { disabled, styles, ...rest } = props;

  function classNames(type: "form" | "input", disabled: boolean) {
    switch (type) {
      case "form":
        return `updapt-form-search-input-cover ${
          disabled ? "disabled" : "not-disabled"
        }`;

      case "input":
        return `updapt-search-input ${disabled ? "disabled" : "not-disabled"}`;
      default:
        return "";
    }
  }

  const parentDivProps: React.FormHTMLAttributes<HTMLDivElement> = {
    className: classNames("form", disabled!),
    ...rest,
    style: styles?.root,
  };
  const childDivProps: React.HTMLAttributes<HTMLDivElement> = {
    className: "updapt-input-search-icon",
    ...rest,
    style: styles?.icon,
  };
  const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
    type: "search",
    className: classNames("input", disabled!),
    ...rest,
    style: styles?.input,
  };

  return (
    <div {...parentDivProps}>
      <div {...childDivProps}>{icons.search}</div>
      <input {...inputProps} />
    </div>
  );
}
