import React, { CSSProperties } from "react";
import "./styles.css";
interface IUpdaptInputProps extends React.AllHTMLAttributes<HTMLInputElement> {
  lable?: string;
  isRequired?: boolean;
  styles?: {
    root?: CSSProperties;
    label?: CSSProperties;
    input?: CSSProperties;
  };
  isError?: boolean;
  errorMessage?: string;
  isWarning?: boolean;
  warningMessage?: string;
}
export function UpdaptInput(props: IUpdaptInputProps) {
  const {
    lable,
    isRequired,
    errorMessage,
    styles,
    isWarning,
    warningMessage,
    isError,
    ...rest
  } = props;
  const labelProps: React.LabelHTMLAttributes<HTMLLabelElement> = {
    className: isRequired ? "required-star-logo" : "label",
    style: styles?.label,
  };
  const errorLableProps: React.LabelHTMLAttributes<HTMLLabelElement> = {
    className: `label-error`,
  };
  const warningLabelProps: React.LabelHTMLAttributes<HTMLLabelElement> = {
    className: `label-warning`,
  };

  function className(isError: boolean, isSensitiveWord: boolean) {
    switch (true) {
      case isError:
        return "error";
      case isSensitiveWord:
        return "input-warning";
      default:
        return "no-error";
    }
  }
  const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
    type: "text",
    className: `input ${className(isError!, isWarning!)}`,
    ...rest,
    style: styles?.input,
  };

  return (
    <>
      <div className="root" style={styles?.root}>
        {lable && <label {...labelProps}>{lable}</label>}
        {<input {...inputProps} />}
        {isError && <label {...errorLableProps}>{errorMessage}</label>}
        {isWarning && <label {...warningLabelProps}>{warningMessage}</label>}
      </div>
    </>
  );
}
