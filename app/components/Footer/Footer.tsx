"use client";

import { useRouter } from "next/navigation";

import navigationMenu from "@/app/utils/navigationMenu";

import type { MouseEventHandler } from "react";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export default function Footer() {
  const router: AppRouterInstance = useRouter();

  const date: Date = new Date();
  const getYear: string = date.getFullYear().toString();

  const handleClickNavigation = (
    item: string
  ): MouseEventHandler<HTMLLIElement> extends void ? MouseEvent : any => {
    if (item === "Home") {
      router.push("/");
    } else {
      router.push(`/${item.toLowerCase()}`);
    }
  };

  return (
    <footer className="footer-content">
      <ul role="list">
        {navigationMenu.map((item) => (
          <li key={item} onClick={() => handleClickNavigation(item)}>
            {item}
          </li>
        ))}
      </ul>
      <span>&copy; Maulana Akbar Yudistika {getYear}</span>
    </footer>
  );
}
