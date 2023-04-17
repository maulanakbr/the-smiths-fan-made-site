import type { ChildrenProps } from "@/app/types";

export default function MainContainer({ children }: ChildrenProps) {
  return <div className="main-container">{children}</div>;
}
