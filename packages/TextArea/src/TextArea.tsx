import * as React from "react";
import "./styles.css";

export type UpdaptTextAreaProp = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  width: number;
  isError?: boolean;
  value?: string;
};

export function UpdaptTextArea({
  width,
  isError,
  value,
  ...rest
}: UpdaptTextAreaProp) {
  function isErrorClassName(isError: boolean): string {
    if (isError) {
      return "error";
    } else {
      return "no-error";
    }
  }
  return (
    <>
      <textarea
        className={
          value || isError
            ? `updapt-text-area-filled ${isErrorClassName(isError!)}`
            : "updapt-text-area-not-filled"
        }
        style={{ width: `${width}px` }}
        value={value}
        {...rest}
      />
    </>
  );
}
