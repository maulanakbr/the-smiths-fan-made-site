import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import type { ChildrenProps } from "@/app/types";

export default function MainContainer({ children }: ChildrenProps) {
  return (
    <div className="main-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
