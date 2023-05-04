import Link from "next/link";

import type { NavigationProps } from "@/app/types";

export default function ButtonElement({
  navigationType,
  navigationClass = "button-content",
  navigationLink,
  navigationText,
  handleFunction,
}: NavigationProps<HTMLButtonElement | HTMLAnchorElement>) {
  return (
    <>
      {navigationType === "BUTTON" ? (
        <button className={navigationClass} onClick={handleFunction}>
          {navigationText}
        </button>
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
