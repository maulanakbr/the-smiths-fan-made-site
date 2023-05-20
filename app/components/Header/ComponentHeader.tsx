import type { ComponentHeaderProps } from "@/app/types";

export default function ComponentHeader({
  type,
  headerText,
  subText,
  headerClass,
}: ComponentHeaderProps) {
  return (
    <>
      {type === "H1" && <h1 className={headerClass}>{headerText}</h1>}
      {type === "H1_SUB" && (
        <div className={headerClass}>
          <h1>{headerText}</h1>
          <p>{subText}</p>
        </div>
      )}
      {type === "H1_TAG" && (
        <div className={headerClass}>
          <p>{subText}</p>
          <h3>{headerText}</h3>
        </div>
      )}
      {type === "H2" && <h2 className={headerClass}>{headerText}</h2>}
      {type === "H3" && <h3 className={headerClass}>{headerText}</h3>}
      {type === "H4" && <h4 className={headerClass}>{headerText}</h4>}
    </>
  );
}
