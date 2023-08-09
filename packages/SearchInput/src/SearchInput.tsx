import * as React from "react";
import "./styles.css";
import images from "./Common/imageVaribale";

export type UpdaptSearchProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "disabled"
> & {
  width: number;
  disabled?: boolean;
  imageWidth?: number;
  imageHeight?: number;
  urlPosition?: string;
};
export function UpdaptSearchInput({
  width,
  disabled,
  imageWidth,
  imageHeight,
  urlPosition,
  ...rest
}: UpdaptSearchProps) {
  const svgDataURI = `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width=${imageWidth} height=${imageHeight} viewBox="0 0 31.613 31.184">
   <path id="Icon_ionic-ios-search" data-name="Icon ionic-ios-search" d="M35.742,33.419,26.95,24.667a12.291,12.291,0,0,0,2.758-7.753A12.511,12.511,0,0,0,17.1,4.493,12.518,12.518,0,0,0,4.5,16.922,12.511,12.511,0,0,0,17.1,29.343a12.669,12.669,0,0,0,7.944-2.776l8.735,8.695a1.367,1.367,0,0,0,1.91.049A1.33,1.33,0,0,0,35.742,33.419ZM17.1,26.672a9.9,9.9,0,0,1-7-2.858,9.646,9.646,0,0,1,0-13.785,10,10,0,0,1,14,0,9.646,9.646,0,0,1,0,13.785A9.9,9.9,0,0,1,17.1,26.672Z" transform="translate(-4.5 -4.492)" fill="#a0a0a0"/>
 </svg>
 `
  )}`;

  return (
    <>
      <input
        type="search"
        className="updapt-search-input"
        style={{
          width: `${width}px`,
          backgroundImage: `url(${svgDataURI})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: `${urlPosition}px center`,
        }}
        disabled={disabled}
        {...rest}
      />
    </>
  );
}
