"use client";

import { useRouter } from "next/navigation";

import NavigationElement from "../Navigation/NavigationElement";
import { SiApplemusic, SiDeezer, SiGithub, SiSpotify } from "react-icons/si";

import {
  navigationMenuList,
  footerMenuList,
  projectAuthor,
} from "@/app/utils/navigationMenu";

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

  const iconColors: string[] = ["#1ed760", "#f04e65", "#f88715"];

  return (
    <footer className="footer-content">
      <div className="footer-navigation">
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
      </div>
      <div className="footer-listening-platform">
        <ul role="list">
          {footerMenuList?.map((item, index) => (
            <li key={index}>
              <NavigationElement
                navigationType="ICON"
                navigationLink={item.navTarget}
              >
                {item.navMenuType === "Spotify" ? (
                  <SiSpotify size={25} color={iconColors[0]} />
                ) : item.navMenuType === "Apple Music" ? (
                  <SiApplemusic size={25} color={iconColors[1]} />
                ) : (
                  <SiDeezer size={35} color={iconColors[2]} />
                )}
              </NavigationElement>
            </li>
          ))}
        </ul>
      </div>
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
