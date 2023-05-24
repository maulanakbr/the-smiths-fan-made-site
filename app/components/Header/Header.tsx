"use client";

import { useRouter } from "next/navigation";
import { useState, MouseEventHandler } from "react";

import NavigationElement from "../Navigation/NavigationElement";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { SiGithub } from "react-icons/si";

import { navigationMenuList, projectAuthor } from "@/app/utils/navigationMenu";

import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export default function Header() {
  const [toggle, setToggle] = useState<boolean>(false);
  const router: AppRouterInstance = useRouter();

  const date: Date = new Date();
  const getYear: string = date.getFullYear().toString();

  const handleClickNavigation = (
    item: string
  ): MouseEventHandler<HTMLLIElement> extends void ? MouseEvent : any => {
    router.push(item);

    setToggle(false);
  };

  return (
    <nav className="nav-content">
      <div onClick={() => setToggle(!toggle)}>
        {toggle === false ? (
          <AiOutlineMenu size={40} />
        ) : (
          <AiOutlineClose size={40} />
        )}
      </div>

      {/* Clicked Menu */}
      {toggle === true ? (
        <>
          <ul className="navigation-list-content" role="list">
            {navigationMenuList!.map((item, index) => (
              <li
                key={index}
                onClick={() => handleClickNavigation(item.navTarget)}
              >
                {item.navMenuType}
              </li>
            ))}
            <ul role="list">
              <li>
                <NavigationElement
                  navigationType="ICON"
                  navigationClass="link-content"
                  navigationLink={projectAuthor.githubProfile}
                  navigationText="GITHUB"
                >
                  <SiGithub />
                </NavigationElement>
                <span>&copy; Maulana Akbar Yudistika {getYear}</span>
              </li>
            </ul>
          </ul>
        </>
      ) : null}
    </nav>
  );
}
