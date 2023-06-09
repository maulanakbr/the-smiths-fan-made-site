import Image from "next/image";

import type { ImageElementProps } from "@/app/types";

export default function ImageElement({
  imageSrc,
  imageAlt,
  imageWidth = 300,
  imageHeight = 300,
  imageClass = "image-content",
}: ImageElementProps) {
  return (
    <>
      <Image
        className={imageClass}
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        priority
        placeholder="blur"
        blurDataURL={imageSrc}
      />
    </>
  );
}
