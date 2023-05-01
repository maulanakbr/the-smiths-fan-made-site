"use client";

import { useRouter } from "next/navigation";
import { useState, MouseEventHandler } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import navigationMenu from "@/app/utils/navigationMenu";

import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export default function Header() {
  const [toggle, setToggle] = useState<boolean>(false);
  const router: AppRouterInstance = useRouter();

  const handleClickNavigation = (
    item: string
  ): MouseEventHandler<HTMLLIElement> extends void ? MouseEvent : any => {
    if (item === "Home") {
      router.push("/");
    } else {
      router.push(`/${item.toLowerCase()}`);
    }

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
        <ul role="list">
          {navigationMenu.map((item, index) => (
            <li key={index} onClick={() => handleClickNavigation(item)}>
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
}
