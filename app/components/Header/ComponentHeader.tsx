import type { ChildrenProps } from "@/app/types";

export default function ComponentHeader({
  children,
  attributes,
}: ChildrenProps) {
  return <div className={attributes?.className}>{children}</div>;
}
