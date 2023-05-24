import MainContainer from "./components/Layout/MainContainer";

import "../app/styles/global.scss";
import "swiper/swiper-bundle.css";

import type { ChildrenProps } from "./types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Smiths Fan Made Site",
  description: "Made by Maulana Akbar Yudistika",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
