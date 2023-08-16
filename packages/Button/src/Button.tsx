import * as React from "react";
import "./styles.css";

interface IUpdaptButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: string;
  variant: string;
  disabled?: boolean;
  src?: string;
}

export function UpdaptButton(props: IUpdaptButtonProps) {
  const { size, variant, children, src, disabled, ...rest } = props;
  function className(size: string, variant: string, disabled: boolean) {
    if (disabled) {
      return `${variant}-${size}-disabled`;
    }
    switch (variant) {
      case "primary-button":
        return `primary-button-${size}`;
      case "secondary-button":
        return `secondary-button-${size}`;
      case "primary-button-with-svg":
        return `primary-button-with-svg-${size}`;
      case "secondary-button-with-svg":
        return `secondary-button-with-svg-${size}`;
      case "secondary-button-red":
        return `secondary-button-red-${size}`;
      case "secondary-button-red-with-svg":
        return `secondary-button-red-with-svg-${size}`;
      case "secondary-button-cancel":
        return `secondary-button-cancel-${size}`;
      default:
        return "";
    }
  }

  return (
    <button
      className={`button-cover-${className(size, variant, disabled!)}`}
      disabled={disabled}
      {...rest}
    >
      {(variant === "primary-button-with-svg" ||
        variant === "secondary-button-with-svg" ||
        variant === "secondary-button-red-with-svg") && (
        <img
          src={`${src}`}
          width="16px"
          height="16px"
          style={{ opacity: "0.5" }}
        />
      )}
      {children}
    </button>
  );
}
