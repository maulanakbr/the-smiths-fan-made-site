import NavigationElement from "../Navigation/NavigationElement";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

import { navigationMenuList } from "@/app/utils/navigationMenu";

export default function PageIsNotAvailable() {
  return (
    <div className="page-is-not-available-content">
      <h3>Sorry, this page isn&apos;t available</h3>
      <NavigationElement
        navigationType="ICON"
        navigationClass="link-to-home"
        navigationLink={navigationMenuList[0].navTarget}
        navigationTarget="_self"
        navigationText="back to homepage"
      >
        <HiOutlineArrowUpRight size={17} />
      </NavigationElement>
    </div>
  );
}
