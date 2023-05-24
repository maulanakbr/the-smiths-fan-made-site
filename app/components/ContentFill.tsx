import ComponentHeader from "./Header/ComponentHeader";

import type { ContentFillProps } from "@/app/types";

export default function ContentFill({
  contentType,
  contentCategory,
  contentData,
  children,
  contentClass,
}: ContentFillProps) {
  return (
    <>
      {contentType === "NORMAL" ? (
        <div className={contentClass}>
          <ComponentHeader headerType="H4" headerText={contentCategory!} />
          <div>
            {typeof contentData === "object" ? (
              contentData.map((item, index) => <div key={index}>{item}</div>)
            ) : (
              <div>{contentData}</div>
            )}
          </div>
        </div>
      ) : (
        <tr>{children}</tr>
      )}
    </>
  );
}
