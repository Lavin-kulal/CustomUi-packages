import React, { CSSProperties } from "react";
import "./styles.css";

export type UpdaptTextAreaProp = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  styles?: {
    root?: CSSProperties;
    label?: CSSProperties;
    input?: CSSProperties;
  };
  isError?: boolean;
  errorMessage?: string;
  isWarning?: boolean;
  warningMessage?: string;
};

export function UpdaptTextArea(props: UpdaptTextAreaProp) {
  const { isError, errorMessage, isWarning, warningMessage, styles, ...rest } =
    props;
  const errorLableProps: React.LabelHTMLAttributes<HTMLLabelElement> = {
    className: `label-error`,
  };
  function className(isError: boolean, isWarning: boolean) {
    switch (true) {
      case isError:
        return "error";
      case isWarning:
        return "input-warning";
      default:
        return "no-error";
    }
  }
  const textAreaProps: React.TextareaHTMLAttributes<HTMLTextAreaElement> = {
    className: `textarea ${className(isError!, isWarning!)}`,
    ...rest,
    style: styles?.input,
  };
  return (
    <div className="root" style={styles?.root}>
      <textarea {...textAreaProps} />
      {isError && <label {...errorLableProps}>{errorMessage}</label>}
    </div>
  );
}
