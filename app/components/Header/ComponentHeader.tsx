import type { ComponentHeaderProps } from "@/app/types";

export default function ComponentHeader({
  headerType,
  headerText,
  subText,
  headerClass,
}: ComponentHeaderProps) {
  return (
    <>
      {headerType === "H1" && (
        <header>
          <h1 className={headerClass}>{headerText}</h1>
        </header>
      )}
      {headerType === "H1_SUB" && (
        <div className={headerClass}>
          <header>
            <h1>{headerText}</h1>
          </header>
          <div>{subText}</div>
        </div>
      )}
      {headerType === "H1_TAG" && (
        <div className={headerClass}>
          <header>
            <h4>{headerText}</h4>
          </header>
          <div>{subText}</div>
        </div>
      )}
      {headerType === "H2" && (
        <header>
          <h2 className={headerClass}>{headerText}</h2>
        </header>
      )}
      {headerType === "H3" && (
        <header>
          <h3 className={headerClass}>{headerText}</h3>
        </header>
      )}
      {headerType === "H4" && (
        <header>
          <h4 className={headerClass}>{headerText}</h4>
        </header>
      )}
    </>
  );
}
