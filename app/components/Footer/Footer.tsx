"use client";

import { useRouter } from "next/navigation";

import NavigationElement from "../Navigation/NavigationElement";
import { SiGithub } from "react-icons/si";

import { navigationMenuList, projectAuthor } from "@/app/utils/navigationMenu";

import type { MouseEventHandler } from "react";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export default function Footer() {
  const router: AppRouterInstance = useRouter();

  const date: Date = new Date();
  const getYear: string = date.getFullYear().toString();

  const handleClickNavigation = (
    item: string
  ): MouseEventHandler<HTMLLIElement> extends void ? MouseEvent : any => {
    router.push(item);
  };

  return (
    <footer className="footer-content">
      <ul role="list">
        {navigationMenuList.map((item) => (
          <li
            key={item.navMenuType}
            onClick={() => handleClickNavigation(item.navTarget)}
          >
            {item.navMenuType}
          </li>
        ))}
      </ul>
      <div>
        <NavigationElement
          navigationType="ICON"
          navigationClass="link-content"
          navigationLink={projectAuthor.githubProfile}
          navigationText="GITHUB"
        >
          <SiGithub />
        </NavigationElement>
        <span>&copy; Maulana Akbar Yudistika {getYear}</span>
      </div>
    </footer>
  );
}
