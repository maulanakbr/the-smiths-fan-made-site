import Link from "next/link";
import ImageElement from "../Image/ImageElement";

import type { NavigationProps } from "@/app/types";

export default function NavigationElement({
  navigationType,
  navigationClass = "button-content",
  navigationLink,
  navigationImageSrc,
  navigationImageAlt,
  navigationText,
  handleFunction,
}: NavigationProps<HTMLButtonElement | HTMLAnchorElement>) {
  return (
    <>
      {navigationType === "BUTTON" ? (
        <button className={navigationClass} onClick={handleFunction}>
          {navigationText}
        </button>
      ) : navigationType === "IMAGE" ? (
        <Link className={navigationClass} href={navigationLink!}>
          {navigationImageSrc && navigationImageAlt !== undefined ? (
            <ImageElement
              imageSrc={navigationImageSrc}
              imageAlt={navigationImageAlt}
            />
          ) : null}
        </Link>
      ) : (
        <Link
          className={navigationClass}
          href={navigationLink!}
          target="_blank"
        >
          {navigationText}
        </Link>
      )}
    </>
  );
}
