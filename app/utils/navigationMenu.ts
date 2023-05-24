import type { NavigationMenuListProps, ProjectAuthorProps } from "../types";

export const navigationMenuList: NavigationMenuListProps[] = [
  {
    navMenuType: "Home",
    navTarget: "/",
  },
  {
    navMenuType: "History",
    navTarget: "/history",
  },
  {
    navMenuType: "Discography",
    navTarget: "/discography",
  },
  {
    navMenuType: "Merchandise",
    navTarget: "/merchandise",
  },
  {
    navMenuType: "Official Website",
    navTarget: "http://www.officialsmiths.co.uk/tqid/",
  },
];

export const projectAuthor: ProjectAuthorProps = {
  authorName: "Maulana Akbar Yudistika",
  githubProfile: "https://github.com/maulanakbr",
};

module.exports = {
  navigationMenuList,
  projectAuthor,
};
