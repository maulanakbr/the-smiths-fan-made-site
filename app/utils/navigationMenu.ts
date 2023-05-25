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

export const footerMenuList: NavigationMenuListProps[] = [
  {
    navMenuType: "Spotify",
    navTarget: "https://open.spotify.com/artist/3yY2gUcIsjMr8hjo51PoJ8",
  },
  {
    navMenuType: "Apple Music",
    navTarget: "https://music.apple.com/us/artist/the-smiths/829538",
  },
  {
    navMenuType: "Deezer",
    navTarget: "https://www.deezer.com/us/artist/1297?deferredFl=1",
  },
];

export const projectAuthor: ProjectAuthorProps = {
  authorName: "Maulana Akbar Yudistika",
  githubProfile: "https://github.com/maulanakbr",
};

module.exports = {
  navigationMenuList,
  footerMenuList,
  projectAuthor,
};
