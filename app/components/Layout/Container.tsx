import type { ChildrenProps } from "@/app/types";

export default function Container({ children }: ChildrenProps) {
  return <section className="container">{children}</section>;
}
