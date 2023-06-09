import Link from "next/link";
import ImageElement from "../Image/ImageElement";

import type { NavigationProps } from "@/app/types";
import ComponentHeader from "../Header/ComponentHeader";

export default function NavigationElement({
  navigationType,
  navigationClass = "button-content",
  navigationLink,
  navigationImageSrc,
  navigationImageAlt,
  navigationText,
  navigationTarget = "_blank",
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
        <Link href={navigationLink!} as={navigationLink!}>
          {navigationImageSrc && navigationImageAlt !== undefined ? (
            <ImageElement
              imageSrc={navigationImageSrc}
              imageAlt={navigationImageAlt}
              imageClass={navigationClass}
            />
          ) : null}
        </Link>
      ) : navigationType === "LINK" ? (
        <Link
          className={navigationClass}
          href={navigationLink!}
          target={navigationTarget}
        >
          {navigationText}
        </Link>
      ) : (
        <Link
          className={navigationClass}
          href={navigationLink!}
          target={navigationTarget}
        >
          {navigationText}
          <div>{children}</div>
        </Link>
      )}
    </>
  );
}
