import React, { CSSProperties } from "react";
import "./styles.css";
interface IUpdaptInputProps
  extends React.AllHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  lable?: string;
  requiredStar?: boolean;
  errorMessage?: string;
  multiline?: boolean;
  styles?: {
    root?: CSSProperties;
    label?: CSSProperties;
    input?: CSSProperties;
  };
  isSensitiveWord?: boolean;
  sensitiveMessage?: string;
}

export function UpdaptInput(props: IUpdaptInputProps) {
  const {
    lable,
    requiredStar,
    errorMessage,
    multiline,
    styles,
    isSensitiveWord,
    sensitiveMessage,
  } = props;
  const labelProps: React.LabelHTMLAttributes<HTMLLabelElement> = {
    className: requiredStar ? "required-star-logo" : "label ",
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
    className: `input ${errorMessage && "input-error"} ${
      isSensitiveWord && "input-warning"
    }`,
    ...props,
    style: styles?.input,
  };
  const textAreaProps: React.TextareaHTMLAttributes<HTMLTextAreaElement> = {
    className: `textarea ${errorMessage && "input-error"}`,
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
