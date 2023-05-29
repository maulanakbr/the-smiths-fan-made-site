import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export interface ImageElementProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  imageClass?: string;
}
