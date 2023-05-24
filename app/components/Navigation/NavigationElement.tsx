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
  children,
  handleFunction,
}: NavigationProps<HTMLButtonElement | HTMLAnchorElement>) {
  return (
    <>
      {navigationType === "BUTTON" ? (
        <button className={navigationClass} onClick={handleFunction}>
          {navigationText}
        </button>
      ) : navigationType === "IMAGE" ? (
        <Link
          className={navigationClass}
          href={navigationLink!}
          as={navigationLink!}
        >
          {navigationImageSrc && navigationImageAlt !== undefined ? (
            <ImageElement
              imageSrc={navigationImageSrc}
              imageAlt={navigationImageAlt}
            />
          ) : null}
        </Link>
      ) : navigationType === "LINK" ? (
        <Link
          className={navigationClass}
          href={navigationLink!}
          target="_blank"
        >
          {navigationText}
        </Link>
      ) : (
        <Link
          className={navigationClass}
          href={navigationLink!}
          target="_blank"
        >
          {children}
        </Link>
      )}
    </>
  );
}
