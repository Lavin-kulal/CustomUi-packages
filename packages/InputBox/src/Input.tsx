import React, { CSSProperties } from "react";
import "./styles.css";
type IUpdaptInputProps = React.AllHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
> & {
  lable?: string;
  requiredStar?: boolean;
  errorMessage?: string;
  multiline?: boolean;
  styles?: {
    root?: CSSProperties;
    label?: CSSProperties;
    input?: CSSProperties;
  };
  isError?: boolean;
  isSensitiveWord?: boolean;
  sensitiveMessage?: string;
};

export function UpdaptInput(props: IUpdaptInputProps) {
  const {
    lable,
    requiredStar,
    errorMessage,
    multiline,
    styles,
    isSensitiveWord,
    sensitiveMessage,
    isError,
  } = props;
  const labelProps: React.LabelHTMLAttributes<HTMLLabelElement> = {
    className: requiredStar ? "required-star-logo" : "label",
    style: styles?.label,
  };
  const errorLableProps: React.LabelHTMLAttributes<HTMLLabelElement> = {
    className: `label-error`,
  };
  const warningLabelProps: React.LabelHTMLAttributes<HTMLLabelElement> = {
    className: `label-warning`,
  };
  const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
    type: "text",
    className: `input ${isError && "input-error"} ${
      isSensitiveWord && "input-warning"
    }`,
    ...props,
    style: styles?.input,
  };
  const textAreaProps: React.TextareaHTMLAttributes<HTMLTextAreaElement> = {
    className: `textarea ${isError && "input-error"} ${
      isSensitiveWord && "input-warning"
    }`,
    ...props,
    style: styles?.input,
  };
  return (
    <>
      <div className="root" style={styles?.root}>
        {lable && <label {...labelProps}>{lable}</label>}
        {multiline ? (
          <textarea {...textAreaProps} />
        ) : (
          <input {...inputProps} />
        )}
        {errorMessage && <label {...errorLableProps}>{errorMessage}</label>}
        {sensitiveMessage && (
          <label {...warningLabelProps}>{sensitiveMessage}</label>
        )}
      </div>
    </>
  );
}
